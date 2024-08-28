import React, { useState, useEffect } from 'react';
import './vendor.css';

const Vendor = () => {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch vendors data from your API
    // For now, we'll use mock data
    const mockVendors = [
      { id: 1, name: 'Jane Cooper', address: '85 Crescent Street Miami, FL 33174', phone: '(225) 555-0118', email: 'jane@microsoft.com', status: 'Active' },
      { id: 2, name: 'Floyd Miles', address: '9 Vine St Sanford, FL 32771', phone: '(205) 555-0100', email: 'floyd@yahoo.com', status: 'Inactive' },
      // Add more mock vendors...
    ];
    setVendors(mockVendors);
  }, []);

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="vendor-page">
      <h1>All Vendors</h1>
      <div className="vendor-header">
        <input
          type="text"
          placeholder="Search vendors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="add-vendor">Add Vendor</button>
      </div>
      <table className="vendor-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Status</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {filteredVendors.map(vendor => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.address}</td>
              <td>{vendor.phone}</td>
              <td>{vendor.email}</td>
              <td>
                <span className={`status ${vendor.status.toLowerCase()}`}>
                  {vendor.status}
                </span>
              </td>
              <td>
                <button className="edit-button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vendor;