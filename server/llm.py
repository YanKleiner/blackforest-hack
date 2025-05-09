from openai import OpenAI
from dotenv import load_dotenv
import os
import PyPDF2

# Load environment variables from .env file
load_dotenv()

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENAI_API_KEY"),
)

def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file."""
    text = ""
    try:
        with open(pdf_path, "rb") as file:
            reader = PyPDF2.PdfReader(file)
            for page in reader.pages:
                text += page.extract_text()
    except Exception as e:
        print(f"Error reading PDF file: {e}")
    return text

# Specify the path to the PDF file
pdf_path = "/Users/greysonwiesenack/Library/Mobile Documents/com~apple~CloudDocs/Independant/Hackathon/BlackForest Hack/data-for-participants/Example-2/service-specification.pdf"  # Replace with the actual path to your PDF file

# Extract text from the PDF
pdf_text = extract_text_from_pdf(pdf_path)

# Print the extracted text in the terminal
if pdf_text:
    print("Extracted PDF Text:")
    print(pdf_text)
else:
    print("No text could be extracted from the PDF.")