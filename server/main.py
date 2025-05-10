from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
from utils import extract_pdf_text, split_text_into_chunks, analyze_text_chunk_with_keywords
import os
import xml.etree.ElementTree as ET

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/upload-pdf/")
async def upload_pdf(file: UploadFile = File(...)):
    """
    Endpoint to upload a PDF file and extract its text.
    """
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are allowed.")
    
    try:
        # Save the uploaded file temporarily
        temp_file_path = f"temp_{file.filename}"
        with open(temp_file_path, "wb") as temp_file:
            temp_file.write(await file.read())
        
        # Extract text from the PDF
        pdf_text = extract_pdf_text(temp_file_path)
        os.remove(temp_file_path)  # Clean up the temporary file
        return {"pdf_text": pdf_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process PDF: {e}")

@app.post("/analyze-keywords/")
async def analyze_keywords(pdf_text: str, keywords: list[str]):
    """
    Endpoint to analyze text chunks for specific keywords.
    """
    try:
        chunk_size = 1000
        text_chunks = split_text_into_chunks(pdf_text, chunk_size)
        analysis_results = []

        for chunk in text_chunks:
            result = analyze_text_chunk_with_keywords(chunk, keywords)
            analysis_results.append(result)
        
        return {"analysis_results": analysis_results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to analyze keywords: {e}")

@app.post("/generate-xml/")
async def generate_xml(analysis_results: list[dict]):
    """
    Endpoint to generate an XML file from the analysis results.
    """
    try:
        root = ET.Element("AnalysisResults")
        for result in analysis_results:
            item = ET.SubElement(root, "Result")
            ET.SubElement(item, "KeywordFound").text = result["result"]
            ET.SubElement(item, "Confidence").text = str(result["confidence"])

        tree = ET.ElementTree(root)
        xml_file_path = "analysis_results.xml"
        tree.write(xml_file_path)

        return FileResponse(xml_file_path, media_type="application/xml", filename="analysis_results.xml")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate XML: {e}")
