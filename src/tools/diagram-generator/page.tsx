import React, { useState } from 'react';
import styles from "./styles.module.scss"; // Importing CSS specific to this page


const DiagramGeneratorPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [diagram, setDiagram] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];
      setFile(uploadedFile);

      const formData = new FormData();
      formData.append('file', uploadedFile);

      const response = await fetch('/api/tools/diagram-generator', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setDiagram(result.diagram);
    }
  };

  return (
    <div>
      <h1>Infrastructure Diagram Generator</h1>
      <p>Upload a Terraform file to generate a visual diagram.</p>
      <input type="file" accept=".tf" onChange={handleFileUpload} />
      {diagram && (
        <div>
          <h2>Generated Diagram</h2>
          <pre>{diagram}</pre>
        </div>
      )}
    </div>
  );
};

export default DiagramGeneratorPage;
