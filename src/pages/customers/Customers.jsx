import React, { useState } from 'react';
import { FaPlus, FaFileImport, FaDownload } from 'react-icons/fa';
import ButtonWithIcon from '../../elements/buttonWithIcon/ButtonWithIcon.jsx';
import ClientDetailsForm from '../../components/clientDetailsForm/ClientDetailsForm.jsx';
import ImportFileModal from '../../components/importFileModal/ImportFileModal.jsx';
import './customers.css';

// import CustomerListActive from '../../components/customerListActive/CustomerListActive.jsx';
// import CustomerListApproved from '../../components/customerListApproved/customerListApproved.jsx';
import CustomerAllTabs from '../../components/customerAllTabs/CustomerAllTabs.jsx';

const Customers = () => {
  const [showImportModal, setShowImportModal] = useState(false);
  const [showClientForm, setShowClientForm] = useState(false);

  const handleClientFormClose = () => {
    setShowClientForm(false);
  };

  return (
    <div className="customers-page">
      <div className="customers-header">
        <h1>All Customers</h1>
        <div className="customer-actions">
          {/* <ButtonWithIcon 
            onClick={() => setShowClientForm(true)}
            icon={<FaPlus />}
            text="Add Customer"
            className="primary"
          /> */}

          <ButtonWithIcon 
            onClick={() => setShowImportModal(true)}
            icon={<FaFileImport />}
            text="Import File"
            className="secondary"
          />

          <ButtonWithIcon 
            onClick={() => { /* handle download */ }}
            icon={<FaDownload />}
            text="Download"
            className="danger"
          />
        </div>
      </div>
      <CustomerAllTabs />
      {showImportModal && <ImportFileModal onClose={() => setShowImportModal(false)} />}
      
      {/* Full-page form rendering for ClientDetailsForm
      {showClientForm && (
        <div className="full-page-form">
          <ClientDetailsForm onClose={handleClientFormClose} />
        </div>
      )} */}
      
    </div>
  );
};

export default Customers;
