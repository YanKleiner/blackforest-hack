import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { eq } from 'drizzle-orm';
import { fileTable } from './schema';
import { extractText, getDocumentProxy } from 'unpdf';

import { readFile } from 'fs/promises';

const db = drizzle(process.env.DB_FILE_NAME!);

async function main() {
  try {
    // Get the first file from the database
    const files = await db.select().from(fileTable).limit(1);

    if (files.length === 0) {
      console.error('No files found in the database');
      return;
    }

    const file = files[0];
    console.log(`Processing file: ${file.name}`);

    // Read the file from the file path
    if (!file.path) {
      throw new Error('File path is null or undefined');
    }
    const buffer = await readFile(file.path);

    // Parse the PDF
    const pdfDocument = await getDocumentProxy(new Uint8Array(buffer));

    // Extract text from the PDF
    const { totalPages, text } = await extractText(pdfDocument, {
      mergePages: true,
    });

    console.log(`Total pages: ${totalPages}`);
    console.log(text);

    // Close the PDF document when done
    if (pdfDocument && pdfDocument.cleanup) {
      await pdfDocument.cleanup();
    }
  } catch (error) {
    console.error('Error processing PDF:', error);
  }
}

main();
