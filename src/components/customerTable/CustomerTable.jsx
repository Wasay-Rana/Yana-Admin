import React from 'react';

import SearchBar from '../../elements/searchBar/SearchBar';

import './customerTable.css';


function CustomerTable({ customers }) {
  return (
    <div className="customer-table">
      <div className="table-header">
        <div className='htext'>
        <h2>All Customers</h2>
        <h5>Active Members</h5>
        </div>
        <div className="table-actions">
        < SearchBar />
          
          <select>
            <option value="newest">Sort by: Newest </option>
            <option value="oldest">Sort by: Oldest </option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Insurance</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Meals</th>
            <th>Status</th>
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
            </tr>
          ))}
        </tbody>
      </table>
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
}

export default CustomerTable;