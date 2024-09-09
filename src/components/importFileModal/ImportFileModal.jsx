import React, { useState } from 'react';
import './importFileModal.css'

const ImportFileModal = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImport = () => {
    // Implement file import logic here
    console.log('Importing file:', file);
    onClose();
  };

  return (
    <div className="modal-overlay-import">
      <div className="modal-content-import">
        <h2>Import File</h2>
        <div className="file-upload-area">
          <input type="file" onChange={handleFileChange} accept=".xlsx,.xls,.csv" />
          <p>Drag or click to upload</p>
        </div>
        {file && (
          <div className="file-info">
            <p>{file.name}</p>
          </div>
        )}
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleImport}>Import File</button>
        </div>
      </div>
    </div>
  );
};

export default ImportFileModal;