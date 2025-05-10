import 'dotenv/config';

import express from 'express';
import multer from 'multer';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { readFile } from 'fs/promises';
import OpenAI from 'openai';

import { db } from './db';
import { fileTable } from './schema';
import logger from './logger';
import { extractText, getDocumentProxy } from 'unpdf';

const app = express();
const PORT = '4000';

// Initialize OpenAI client
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to process text with OpenAI to generate a summary
async function processPdfTextWithAI(text: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            'You are an AI assistant specializing in analyzing PDF documents. Provide a concise summary of the following document text.',
        },
        { role: 'user', content: text },
      ],
    });

    return completion.choices[0].message.content || '';
  } catch (error) {
    logger.error(`Error processing text with OpenAI for summary: ${error}`);
    return 'Failed to generate AI summary';
  }
}

// Function to extract structured XML from text with OpenAI
async function generateXmlFromPdfText(text: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are an expert estimator for industrial door projects.  
The user sends ONE plain-text block with this structure:

<— blank line —>
Full German “Leistungsverzeichnis” text extracted from the PDF …

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
YOUR TASK
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
1.⁠ ⁠Read the first three header lines and store:
   • customerId            – after “CUSTOMER_ID=”
   • commission            – after “COMMISSION=”
   • shippingConditionId   – after “SHIPPING_CONDITION_ID=”

2.⁠ ⁠Parse the remaining specification text.
   • Detect every position (LV-POS), its quantity, unit, description and requirement keywords.
   • Classify each position into a catalog SKU (see table below, elements > accessories > services priority).
   • Ignore optional/on-demand positions in total counts but DO include them in XML; set their quantityUnit to “Optional”.
   • Extract supplier/brand names ONLY for door elements and append them in brackets inside <text>.
   • Preserve the original German wording; insert <br/> line breaks where helpful.
   • After two line breaks inside <text>, add concise requirement tags you detect (fire, smoke, sound, burglary, radiation, wet, humid, climate class, U-value, accessibility, rebate type, post-and-beam, external).

3.⁠ ⁠Catalog mapping
   ELEMENTS
     620001 – Wooden doors & frames
     670001 – Steel doors / frames / tubular-frame doors
     660001 – Front doors
     610001 – Glass doors
     680001 – Gates
     Rule: classify by door leaf; for glazing classify by frame.

   ACCESSORIES
     240001 – Fittings          330001 – Door stoppers
     450001 – Ventilation grilles
     290001 – Door closers      360001 – Locks / electric openers

   SERVICES
     DL8110016 – Maintenance
     DL5010008 – Hourly work
     DL5019990 – Misc. services (survey, sample leaf, site equipment…)

4.⁠ ⁠Produce exactly this XML (UTF-8, no BOM) and *nothing else*:

<?xml version="1.0" encoding="UTF-8"?>
<order>
  <customerId>{customerId}</customerId>
  <commission>{commission}</commission>
  <type>A</type>
  <shippingConditionId>{shippingConditionId}</shippingConditionId>
  <items>
    <!-- repeat for every detected position -->
    <item>
      <sku>{catalogSku}</sku>
      <name>{short human-readable name}</name>
      <text>{full escaped description with <br/>}</text>
        <quantity>{number OR \"Optional\"}</quantity>
      <quantityUnit>{unit, e.g. \"Stk\"}</quantityUnit>
      <price>{\“0.00\” if none found}</price>
      <priceUnit>€</priceUnit>
      <commission>{original LV position number}</commission>
    </item>
  </items>
</order>

Rules:
•⁠  ⁠Output ONLY the final XML – no markdown, headings, or commentary.  
•⁠  ⁠Escape &, <, >, \", \'. Preserve German umlauts (ü, ö, ä, ß).  
•⁠  ⁠If any field is missing, leave the tag empty but keep it.  
•⁠  ⁠Guarantee the XML is well-formed; the wrapper will save it straight to a file.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
READY?  GO!`,

          // `You are an AI assistant specializing in extracting structured information from construction and order documents.
          // Extract the order information from the document and format it as XML with the following structure:

          // <?xml version="1.0" encoding="UTF-8"?>
          // <order>
          //    <customerId>[ID if available]</customerId>
          //    <commission>[project name or number]</commission>
          //    <type>[type if available]</type>
          //    <shippingConditionId>[ID if available]</shippingConditionId>
          //    <items>
          //       <item>
          //          <sku>[item number]</sku>
          //          <name>[item name]</name>
          //          <text>[item description]</text>
          //          <quantity>[number]</quantity>
          //          <quantityUnit>[unit]</quantityUnit>
          //          <price>[price]</price>
          //          <priceUnit>[currency]</priceUnit>
          //          <purchasePrice>[price if available]</purchasePrice>
          //          <commission>[position reference]</commission>
          //       </item>
          //       ... (more items)
          //    </items>
          // </order>

          // Include all items from the document. If some information is not available, leave the XML element empty but still include it.`,
        },

        { role: 'user', content: text },
      ],
      temperature: 0.2, // Lower temperature for more consistent output
    });

    const xmlContent = completion.choices[0].message.content || '';
    // Ensure the XML starts with the proper declaration if not present
    if (!xmlContent.trim().startsWith('<?xml')) {
      return `<?xml version="1.0" encoding="UTF-8"?>\n${xmlContent}`;
    }
    return xmlContent;
  } catch (error) {
    logger.error(`Error generating XML with OpenAI: ${error}`);
    return `<?xml version="1.0" encoding="UTF-8"?>\n<order>\n<error>Failed to generate XML structure</error>\n</order>`;
  }
}

app.use(express.json());
app.use(
  morgan(
    'combined'
    // , {
    // stream: {
    //   write: (message: string) => {
    //     logger.info(message.trim());
    //   },
    // },
    // }
  )
);

app.use(helmet());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  // Accept only PDF files
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed'));
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.originalname.replace('.pdf', '') + '-' + uniqueSuffix + '.pdf'
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 30 * 1024 * 1024, // Limit file size to 30MB
    files: 1, // Allow only one file
  },
});
// const upload = multer({ dest: 'uploads/' });

app.post('/api/v1/upload', (req, res) => {
  upload.single('file')(req, res, async (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
      } else {
        return res.status(400).json({ error: err.message });
      }
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
      // Get current timestamp for created/updated fields
      const timestamp = new Date().toISOString();
      let extractedText = '';
      let aiSummary = '';
      let xmlContent = '';

      try {
        // Process the PDF and extract text
        const buffer = await readFile(req.file.path);
        const pdfDocument = await getDocumentProxy(new Uint8Array(buffer));

        const { text, totalPages } = await extractText(pdfDocument, {
          mergePages: true,
        });

        extractedText = text;

        // Process the extracted text with OpenAI for summary and XML
        const [summaryResult, xmlResult] = await Promise.all([
          processPdfTextWithAI(extractedText),
          generateXmlFromPdfText(extractedText),
        ]);

        aiSummary = summaryResult;
        xmlContent = xmlResult;

        // Clean up resources
        if (pdfDocument && pdfDocument.cleanup) {
          await pdfDocument.cleanup();
        }

        logger.info(
          `Successfully extracted text from ${req.file.originalname} (${totalPages} pages)`
        );
      } catch (pdfError) {
        logger.error(`Error processing PDF: ${pdfError}`);
        extractedText = 'Failed to extract text from PDF';
      }

      // Insert file information into database
      const result = await db
        .insert(fileTable)
        .values({
          path: req.file.path,
          name: req.file.originalname,
          status: 'processed',
          createdAt: timestamp,
          updatedAt: timestamp,
          summary: aiSummary,
          description: '',
          content: extractedText,
          xml: xmlContent,
        })
        .returning({ id: fileTable.id });

      // Return success response with file details, extracted text, AI summary, and XML
      return res.status(200).json({
        success: true,
        message: 'File uploaded and processed successfully',
        file: {
          id: result[0].id,
          name: req.file.originalname,
          path: req.file.path,
          size: req.file.size,
          mimetype: req.file.mimetype,
        },
        content: extractedText,
        summary: aiSummary,
        xml: xmlContent,
      });
    } catch (dbError) {
      console.error('Database error:', dbError);
      // If database operation fails, return error
      return res.status(500).json({
        error: 'Failed to save file information to database',
      });
    }
  });
});

// Add a test endpoint to verify logging
app.get('/api/v1/test', (req, res) => {
  logger.info('Test endpoint was called');

  res.status(200).json({ message: 'Test endpoint working' });
});

app.listen(PORT, () => {
  logger.info(`Server running at http://localhost:${PORT}`);
});
