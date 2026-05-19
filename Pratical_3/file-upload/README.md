# Practical 3: File Upload Implementation

##  Overview
This project demonstrates how to implement a **file upload system** in a Next.js application. The implementation covers:
- Multipart form data handling
- File type and size validation
- Upload progress tracking
- Drag and drop interface

---

## Project Setup

1. **[Create Next.js Project](ca://s?q=Create_Nextjs_project_for_file_upload)**
   ```bash
   npx create-next-app file-upload
   cd file-upload

2. Install Dependencies

npm install react-hook-form formidable axios react-dropzone

# Frontend Implementation
1. Basic Upload Form
Built with react-hook-form for validation and form handling.

Uses axios for sending multipart form data to the backend.

2. File Validation
Restricts uploads to specific file types (e.g., .png, .jpg).

Enforces maximum file size (e.g., 5MB).

3. Upload Progress Tracking
Uses axios.onUploadProgress to display real-time upload percentage.

4. Drag and Drop Interface
Implemented with react-dropzone for a modern, user-friendly experience.

# Backend Implementation
1. API Route for Upload
Located in pages/api/upload.js.

Uses formidable to parse multipart form data.

Saves uploaded files to public/uploads.

import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  const form = formidable({ multiples: false });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Upload failed" });

    const file = files.file;
    const data = fs.readFileSync(file.filepath);
    fs.writeFileSync(`./public/uploads/${file.originalFilename}`, data);

    res.status(200).json({ message: "File uploaded successfully" });
  });
}

# Features Checklist
- Multipart form data handling → FormData + formidable

- File type & size validation → react-hook-form

- Upload progress tracking → axios.onUploadProgress

- Drag & drop interface → react-dropzone

# Resources
React Hook Form Documentation

Formidable File Upload Docs

Axios Upload Progress

React Dropzone Docs