import React, { useState } from 'react';
import { FaPlus, FaFileImport, FaDownload } from 'react-icons/fa';
import ButtonWithIcon from '../../elements/buttonWithIcon/ButtonWithIcon.jsx';
import ImportFileModal from '../../components/importFileModal/ImportFileModal.jsx';
import CustomerAllTabs from '../../components/customerAllTabs/CustomerAllTabs.jsx';

const Customers = () => {
  const [showImportModal, setShowImportModal] = useState(false);
  const [importSuccess, setImportSuccess] = useState(false);

  const handleImportSuccess = () => {
    setShowImportModal(false);
    setImportSuccess(true);
    setTimeout(() => setImportSuccess(false), 3000); // Hide the success message after 3 seconds
  };

  return (
    <div className="p-5">
      <div className="flex justify-end items-center mb-5">
        <div className="flex gap-3">
          <ButtonWithIcon 
            onClick={() => setShowImportModal(true)}
            icon={<FaFileImport />}
            text="Import File"
            className="bg-yana-blue text-white px-3 py-2 rounded-full"
          />

          <ButtonWithIcon 
            onClick={() => { /* handle download */ }}
            icon={<FaDownload />}
            text="Download"
            className="bg-red-600 text-white px-3 py-2 rounded-full"
          />
        </div>
      </div>

      {importSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> File imported successfully.</span>
        </div>
      )}

      <CustomerAllTabs />
      {showImportModal && (
        <ImportFileModal 
          onClose={() => setShowImportModal(false)} 
          onImportSuccess={handleImportSuccess} 
        />
      )}
    </div>
  );
};

export default Customers;