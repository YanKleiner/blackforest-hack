from typing import List, Union
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from utils import extract_pdf_text, summarize_items
import os

app = FastAPI()

# Define the list of products the company can provide
PRODUCT_LIST = ["Product A", "Product B", "Product C", "Product D"]

# Directory to store uploaded files
UPLOAD_DIR = "./uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@app.get("/")
def read_root():
    return {"message": "Welcome to the PDF Processing API"}


@app.get("/products")
def list_products():
    """
    Endpoint to list all available products the company can provide.
    """
    return {"products": PRODUCT_LIST}


@app.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):
    """
    Endpoint to upload a PDF file and save it to the server.
    """
    try:
        # Save the uploaded file to the server
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as f:
            f.write(await file.read())
        return {"message": "File uploaded successfully", "file_path": file_path}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to upload file: {e}")


@app.get("/upload-pdf")
def upload_pdf_info():
    """
    Provide information about the /upload-pdf endpoint.
    """
    return {"message": "Use POST method to upload a PDF file to this endpoint."}


@app.post("/process-pdf")
async def process_pdf(file: UploadFile = File(...)):
    """
    Endpoint to process a PDF file, extract its text, and summarize items the company can provide.
    """
    try:
        # Extract text from the uploaded PDF
        pdf_text = extract_pdf_text(file.file)

        # Use the LLM to summarize items
        summary = summarize_items(pdf_text, PRODUCT_LIST)

        return {"summary": summary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process PDF: {e}")


@app.post("/process-uploaded-pdf")
def process_uploaded_pdf(file_name: str):
    """
    Endpoint to process a previously uploaded PDF file by its file name.
    """
    try:
        # Check if the file exists
        file_path = os.path.join(UPLOAD_DIR, file_name)
        if not os.path.exists(file_path):
            raise HTTPException(status_code=404, detail="File not found")

        # Extract text from the PDF
        with open(file_path, "rb") as pdf_file:
            pdf_text = extract_pdf_text(pdf_file)

        # Use the LLM to summarize items
        summary = summarize_items(pdf_text, PRODUCT_LIST)

        return {"summary": summary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process uploaded PDF: {e}")
