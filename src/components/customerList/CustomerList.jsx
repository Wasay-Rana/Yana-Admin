import React from 'react';
import SearchBar from '../../elements/searchBar/SearchBar'; // Ensure you import the SearchBar component

import './customerList.css'; // Update this file to match the styles in customerTable.css

const CustomerList = () => {
  const customers = [
    { id: 1, name: 'Jane Cooper', insurance: 'Nextleet', phone: '(225) 555-0118', email: 'jane@microsoft.com', meals: 14, status: 'Active' },
    { id: 2, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
    // Add more customer data here
  ];

  return (
    <div className="customer-list">
      {/* Header Section */}
      <div className="table-header">
        <div className='htext'>
          <h2>All Customers</h2>
          <h5>Active Members</h5>
        </div>
        <div className="table-actions">
          <SearchBar />
          <select>
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>
        </div>
      </div>
      
      {/* Table Section */}
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Insurance</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Meals</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.insurance}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.meals}</td>
              <td>
                <span className={`status ${customer.status.toLowerCase()}`}>
                  {customer.status}
                </span>
              </td>
              <td>
                <button className="btn btn-edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Pagination Section */}
      <div className="pagination">
        <span>Showing data 1 to 8 of 256K entries</span>
        <div className="page-numbers">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>...</span>
          <span>33</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
