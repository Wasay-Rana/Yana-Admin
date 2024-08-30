import React, { useState } from 'react';
import { FaPlus, FaFileImport, FaDownload } from 'react-icons/fa';
import ButtonWithIcon from '../../elements/buttonWithIcon/ButtonWithIcon.jsx';
import ClientDetailsForm from '../../components/clientDetailsForm/ClientDetailsForm.jsx';
import CustomerList from '../../components/customerList/CustomerList.jsx';
import ImportFileModal from '../../components/importFileModal/ImportFileModal.jsx';
import './customers.css';

const Customers = () => {
  const [showImportModal, setShowImportModal] = useState(false);
  const [showClientForm, setShowClientForm] = useState(false);

  return (
    <div className="customers-page">
      <div className="customers-header">
        <h1>All Customers</h1>
        <div className="customer-actions">
          <ButtonWithIcon 
            onClick={() => setShowClientForm(true)}
            icon={<FaPlus />}
            text="Add Customer"
            className="primary"
          />

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
      <CustomerList />
      {showImportModal && <ImportFileModal onClose={() => setShowImportModal(false)} />}
      {showClientForm && <ClientDetailsForm onClose={() => setShowClientForm(false)} />}
    </div>
  );
};

export default Customers;
