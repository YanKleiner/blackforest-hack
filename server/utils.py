import PyPDF2
import openai

def extract_pdf_text(file):
    """
    Extracts text from a PDF file.

    :param file: A file-like object representing the PDF.
    :return: Extracted text as a string.
    """
    try:
        pdf_reader = PyPDF2.PdfReader(file)
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text()
        return text
    except Exception as e:
        raise RuntimeError(f"Failed to extract text: {e}")

def summarize_items(pdf_text, product_list):
    """
    Uses an LLM to summarize which items from the product list can be provided based on the PDF content.

    :param pdf_text: The extracted text from the PDF.
    :param product_list: A list of products the company can provide.
    :return: A summary of items the company can provide.
    """
    try:
        prompt = (
            f"The following is a list of products our company can provide: {', '.join(product_list)}.\n\n"
            f"Based on the following client request extracted from a PDF:\n\n{pdf_text}\n\n"
            "Summarize which items from the product list we can provide for the client."
        )
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=200,
            temperature=0.7
        )
        return response.choices[0].text.strip()
    except Exception as e:
        raise RuntimeError(f"Failed to summarize items: {e}")
