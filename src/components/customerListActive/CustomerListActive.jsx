import { React, useState } from 'react';

import SearchBar from '../../elements/searchBar/SearchBar'; 

import './customerListActive.css';


// For Active and Inactive

const CustomerListActive = () => {
    const customers = [
        { id: 1, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 2, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Active' },
        { id: 3, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Active' },
        { id: 4, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 5, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Active' },
        { id: 6, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 7, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Active' },
        { id: 8, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 9, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Active' },
        { id: 10, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 11, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Active' },


        // ... (add more customer data here)
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const customersPerPage = 5;

    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
    const totalPages = Math.ceil(customers.length / customersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`pagination-button ${currentPage === i ? 'active' : ''}`}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };


    return (
        <div className="customer-list-container">

                <div className="customer-list">

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

                            {currentCustomers.map((customer) => (
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

                    <div className="pagination-container">
                        <div className="pagination-info">
                            Showing data {indexOfFirstCustomer + 1} to {Math.min(indexOfLastCustomer, customers.length)} of {customers.length} entries
                        </div>
                        <div className="pagination-controls">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="pagination-button"
                            >
                                &lt;
                            </button>
                            {renderPaginationButtons()}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="pagination-button"
                            >
                                &gt;
                            </button>


                        </div>
                    </div>


                </div>
                </div>
                );

};
export default CustomerListActive;