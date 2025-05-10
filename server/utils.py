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
    
def split_text_into_chunks(text, chunk_size):
    """
    Splits a given text into chunks of a specified size.

    :param text: The text to be split.
    :param chunk_size: The maximum size of each chunk.
    :return: A list of text chunks.
    """
    chunks = []
    current_chunk = []

    for word in text.split():
        if len(" ".join(current_chunk + [word])) <= chunk_size:
            current_chunk.append(word)
        else:
            chunks.append(" ".join(current_chunk))
            current_chunk = [word]

    # Add the last chunk if it exists
    if current_chunk:
        chunks.append(" ".join(current_chunk))

    return chunks


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
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=50,
            temperature=0.3
        )
        result = response.choices[0].text.strip()
        return {
            "result": result.split("\n")[0],  # Extract 'Yes' or 'No'
            "confidence": int(result.split("\n")[1].replace("Confidence: ", "").strip()) if "Confidence:" in result else None
        }
    except Exception as e:
        raise RuntimeError(f"Failed to analyze text chunk: {e}")
    

if __name__=="__main__":
    main()

def main():
    # Example usage with the specified PDF file
    pdf_file_path = "/Users/greysonwiesenack/Library/Mobile Documents/com~apple~CloudDocs/Independant/Hackathon/BlackForest Hack/data-for-participants/Example-2/service-specification.pdf"
    product_list = ["Product A", "Product B", "Product C"]
    keywords = ["keyword1", "keyword2"]

    # Extract text from the PDF
    pdf_text = extract_pdf_text(pdf_file_path)
    print("Extracted PDF Text:", pdf_text[:500], "...")  # Print first 500 characters for brevity

    # Summarize items based on the product list
    summary = summarize_items(pdf_text, product_list)
    print("Summary of items:", summary)

    # Split text into chunks and analyze each chunk for keywords
    chunk_size = 1000
    text_chunks = split_text_into_chunks(pdf_text, chunk_size)
    for chunk in text_chunks:
        analysis_result = analyze_text_chunk_with_keywords(chunk, keywords)
        print(f"Analysis result for chunk: {analysis_result}")
