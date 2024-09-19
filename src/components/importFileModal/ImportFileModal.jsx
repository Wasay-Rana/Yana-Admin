import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImportFileModal = ({ onClose, onImportSuccess }) => {
  const [file, setFile] = useState(null);
  const [importStatus, setImportStatus] = useState('');
  const [duplicateSheets, setDuplicateSheets] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setImportStatus('');
    setDuplicateSheets([]);
  };

  const checkForDuplicateSheets = () => {
    // This is a mock function. In a real scenario, you would check against your existing data.
    // For demonstration, we'll randomly decide if there are duplicates.
    const mockDuplicates = Math.random() > 0.5 ? ['Sheet1', 'Sheet3'] : [];
    setDuplicateSheets(mockDuplicates);
    return mockDuplicates.length > 0;
  };

  const handleImport = () => {
    if (!file) {
      setImportStatus('Please select a file to import.');
      return;
    }

    // Check for duplicates
    if (checkForDuplicateSheets()) {
      setImportStatus('Warning: Duplicate sheets detected.');
      return;
    }

    // Implement file import logic here
    console.log('Importing file:', file);
    
    // Simulating import process
    setImportStatus('Importing...');
    
    // Simulate an asynchronous import process
    setTimeout(() => {
      setImportStatus('File imported successfully!');
      
      // Call onImportSuccess if provided
      if (typeof onImportSuccess === 'function') {
        onImportSuccess();
      }
      
      // Close the modal after a delay
      setTimeout(() => {
        onClose();
      }, 1000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Import File</h2>
        
        <div className="file-upload-area border-2 border-dashed border-gray-300 p-4 mb-4 text-center rounded-lg hover:border-blue-500">
          <input 
            type="file" 
            onChange={handleFileChange} 
            accept=".xlsx,.xls,.csv" 
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-100 file:text-yana-blue hover:file:bg-blue-200 cursor-pointer"
          />
          <p className="mt-2 text-sm text-gray-500">Drag or click to upload</p>
        </div>

        {file && (
          <div className="file-info mb-4 text-gray-600">
            <p className="font-medium">Selected File:</p>
            <p>{file.name}</p>
          </div>
        )}

        {importStatus && (
          <div className={`mb-4 p-2 rounded ${
            importStatus.includes('successfully') 
              ? 'bg-green-100 text-green-700' 
              : importStatus === 'Importing...' 
                ? 'bg-blue-100 text-blue-700'
                : 'bg-yellow-100 text-yellow-700'
          }`}>
            {importStatus}
          </div>
        )}

        {duplicateSheets.length > 0 && (
          <div className="mb-4 p-2 rounded bg-yellow-100 text-yellow-700">
            <p>Warning: The following sheets already exist:</p>
            <ul className="list-disc list-inside">
              {duplicateSheets.map((sheet, index) => (
                <li key={index}>{sheet}</li>
              ))}
            </ul>
            <p>Do you want to overwrite them?</p>
          </div>
        )}

        <div className="modal-actions flex justify-end space-x-4 mt-4">
          <button 
            className="bg-[#e6e6e6] text-black py-2 px-6 rounded-full hover:bg-[#d5d5d5] transition ease-in-out duration-150" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-yana-blue text-white py-2 px-6 rounded-full hover:bg-[#104964] transition ease-in-out duration-150" 
            onClick={handleImport}
            disabled={importStatus === 'Importing...'}
          >
            {duplicateSheets.length > 0 ? 'Overwrite and Import' : 'Import File'}
          </button>
        </div>
      </div>
    </div>
  );
};

ImportFileModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onImportSuccess: PropTypes.func,
};

export default ImportFileModal;