import 'dotenv/config';

import express from 'express';

import multer from 'multer';
import cors from 'cors';

import helmet from 'helmet';
import morgan from 'morgan';

import { db } from './db';
import { fileTable } from './schema';
import logger from './logger';

const app = express();
const PORT = '4000';

// Apply middleware before defining routes
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

      // Insert file information into database
      const result = await db
        .insert(fileTable)
        .values({
          path: req.file.path,
          name: req.file.originalname,
          status: 'uploaded',
          createdAt: timestamp,
          updatedAt: timestamp,
          // Leave other fields empty for now
          summary: '',
          description: '',
          content: '',
          xml: '',
        })
        .returning({ id: fileTable.id });

      // Return success response with file details
      return res.status(200).json({
        success: true,
        message: 'File uploaded successfully',
        file: {
          id: result[0].id,
          name: req.file.originalname,
          path: req.file.path,
          size: req.file.size,
          mimetype: req.file.mimetype,
        },
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
