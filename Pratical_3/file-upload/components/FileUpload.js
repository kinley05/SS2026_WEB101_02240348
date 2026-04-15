import { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  // Drag & Drop
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  // Upload function
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    // Validation
    if (file.size > 2 * 1024 * 1024) {
      alert("File too large (Max 2MB)");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/api/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percent);
        },
      });

      alert("Upload Success");
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    }
  };

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed black",
          padding: "20px",
          marginBottom: "10px",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop file here, or click to select</p>
      </div>

      {file && <p>Selected: {file.name}</p>}

      <button onClick={handleUpload}>Upload</button>

      <div>
        <p>Progress: {progress}%</p>
      </div>
    </div>
  );
}