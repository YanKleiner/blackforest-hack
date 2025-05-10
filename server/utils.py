import PyPDF2
import os
from openai import OpenAI, AuthenticationError, APIError  # Updated imports

# Initialize OpenAI client
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise RuntimeError("OpenAI API key is not set. Please set the 'OPENAI_API_KEY' environment variable.")
client = OpenAI(api_key=api_key)

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
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message.content.strip()
    except AuthenticationError:
        raise RuntimeError("Authentication with OpenAI failed. Ensure your API key is correct.")
    except APIError as e:
        raise RuntimeError(f"OpenAI API error: {e}")
    except Exception as e:
        raise RuntimeError(f"Failed to summarize items: {e}")

def analyze_text_chunk_with_keywords(chunk, keywords):
    """
    Prompts the LLM with a chunk of text and a list of keywords to search for.
    Returns whether the keywords were found and the model's confidence.

    :param chunk: A chunk of text to analyze.
    :param keywords: A list of keywords to search for in the text.
    :return: A dictionary with the result and confidence score.
    """
    try:
        prompt = (
            f"The following text chunk is provided:\n\n{chunk}\n\n"
            f"Please analyze the text and determine if it contains any of the following keywords: {', '.join(keywords)}.\n"
            "Respond with 'Yes' or 'No' and provide a confidence score (0-100) for your answer."
        )
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        result = response.choices[0].message.content.strip()
        lines = result.split("\n")
        return {
            "result": lines[0],  # Extract 'Yes' or 'No'
            "confidence": int(lines[1].replace("Confidence: ", "").strip()) if len(lines) > 1 and "Confidence:" in lines[1] else None
        }
    except AuthenticationError:
        raise RuntimeError("Authentication with OpenAI failed. Ensure your API key is correct.")
    except APIError as e:
        raise RuntimeError(f"OpenAI API error: {e}")
    except Exception as e:
        raise RuntimeError(f"Failed to analyze text chunk: {e}")

def test_openai_api_key():
    """
    Tests if the OpenAI API key is loaded and working by making a simple API call.
    """
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": "Test if the API key works."}]
        )
        print("API key is valid. Test response:", response.choices[0].message.content.strip())
    except AuthenticationError:
        print("api_key = " + os.getenv('OPENAI_API_KEY'))
        print("Authentication failed. Check your API key.")
    except APIError as e:
        print(f"OpenAI API error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def main():
    # Example usage with the specified PDF file
    pdf_file_path = "/Users/greysonwiesenack/Library/Mobile Documents/com~apple~CloudDocs/Independant/Hackathon/BlackForest Hack/data-for-participants/Example-2/service-specification.pdf"
    product_list = ["Product A", "Product B", "Product C"]
    keywords = ["keyword1", "keyword2"]

    try:
        # Extract text from the PDF
        with open(pdf_file_path, "rb") as pdf_file:
            pdf_text = extract_pdf_text(pdf_file)

        # Normalize the extracted text
        pdf_text = " ".join(pdf_text.split())  # Remove excessive newlines and whitespace
        print("Extracted PDF Text:", pdf_text[:500], "...")  # Print first 500 characters for brevity

        # Summarize items based on the product list
        summary = summarize_items(pdf_text, product_list)
        print("Summary of items:", summary)

        # Split text into chunks and analyze each chunk for keywords
        chunk_size = 1000
        text_chunks = split_text_into_chunks(pdf_text, chunk_size)
        for i, chunk in enumerate(text_chunks):
            print(f"\nChunk {i + 1}:\n{chunk}\n")  # Print each chunk normally
            analysis_result = analyze_text_chunk_with_keywords(chunk, keywords)
            print(f"Analysis result for chunk {i + 1}: {analysis_result}")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    # Test the API key before running the main logic
    test_openai_api_key()
    main()