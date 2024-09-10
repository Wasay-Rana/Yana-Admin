import React, { useState } from 'react';
import { FaPlus, FaFileImport, FaDownload } from 'react-icons/fa';
import ButtonWithIcon from '../../elements/buttonWithIcon/ButtonWithIcon.jsx';
import ClientDetailsForm from '../../components/clientDetailsForm/ClientDetailsForm.jsx';
import ImportFileModal from '../../components/importFileModal/ImportFileModal.jsx';
import CustomerAllTabs from '../../components/customerAllTabs/CustomerAllTabs.jsx';

const Customers = () => {
  const [showImportModal, setShowImportModal] = useState(false);
  const [showClientForm, setShowClientForm] = useState(false);

  const handleClientFormClose = () => {
    setShowClientForm(false);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h1>All Customers</h1>
        <div className="flex gap-3">
          {/* Uncomment this to add a customer */}
          {/* <ButtonWithIcon 
            onClick={() => setShowClientForm(true)}
            icon={<FaPlus />}
            text="Add Customer"
            className="bg-green-600 text-white px-3 py-2 rounded-full"
          /> */}

          <ButtonWithIcon 
            onClick={() => setShowImportModal(true)}
            icon={<FaFileImport />}
            text="Import File"
            className="bg-custom-blue text-white px-3 py-2 rounded-full"
          />

          <ButtonWithIcon 
            onClick={() => { /* handle download */ }}
            icon={<FaDownload />}
            text="Download"
            className="bg-red-600 text-white px-3 py-2 rounded-full"
          />
        </div>
      </div>
      <CustomerAllTabs />
      {showImportModal && <ImportFileModal onClose={() => setShowImportModal(false)} />}
      
      {/* Full-page form rendering for ClientDetailsForm */}
      {/* {showClientForm && (
        <div className="w-full h-full fixed inset-0 bg-white z-50">
          <ClientDetailsForm onClose={handleClientFormClose} />
        </div>
      )} */}
    </div>
  );
};

export default Customers;
