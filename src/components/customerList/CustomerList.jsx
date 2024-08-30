import React from 'react';

import './customerList.css';

const CustomerList = () => {
  const customers = [
    { id: 1, name: 'Jane Cooper', insurance: 'Nextleet', phone: '(225) 555-0118', email: 'jane@microsoft.com', meals: 14, status: 'Active' },
    { id: 2, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
    // Add more customer data here
  ];

  return (
    <table className="customer-table">
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
              <span className={`status-badge ${customer.status.toLowerCase()}`}>
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
  );
};

export default CustomerList;