import React, { useState } from 'react';

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
          <button className="btn btn-primary" onClick={() => setShowClientForm(true)}>
            Add Customer
          </button>
          <button className="btn btn-secondary" onClick={() => setShowImportModal(true)}>
            Import File
          </button>
          <button className="btn btn-danger">Download</button>
        </div>
      </div>
      <CustomerList />
      {showImportModal && <ImportFileModal onClose={() => setShowImportModal(false)} />}
      {showClientForm && <ClientDetailsForm onClose={() => setShowClientForm(false)} />}
    </div>
  );
};

export default Customers;