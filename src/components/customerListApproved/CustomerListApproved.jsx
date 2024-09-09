import React, { useState } from 'react';
import SearchBar from '../../elements/searchBar/SearchBar';
import { FiTrash2, FiEdit, FiPlusCircle  } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import './customerListApproved.css';

const CustomerListApproved = () => {
    const customers = [
        { id: 1, member_ID: 1234567, medical_ID: 10101010, name: "Marvin McKinney", phone: '(205) 555-0100', request_type: 'MEDICAL', request_status: 'Approved', status: 'actions' },
        { id: 2, member_ID: 1234567, medical_ID: 10101010, name: "Marvin McKinney", phone: '(205) 555-0100', request_type: 'MEDICAL', request_status: 'Pending', status: 'actions' }
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
                            <th>Member ID</th>
                            <th>Medical ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Request Type</th>
                            <th>Request Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCustomers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.member_ID}</td>
                                <td>{customer.medical_ID}</td>
                                <td>{customer.name}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.request_type}</td>
                                <td>
                                    <div className="request-status">
                                        <span className={`status ${customer.request_status.toLowerCase()}`}>
                                            {customer.request_status}
                                        </span>
                                        {customer.request_status === 'Approved' && <FiPlusCircle className='status-icon' />}
                                    </div>
                                </td>
                                <td>
                                    <div className='edit-btns'>
                                        <button>
                                            <MdOutlineRemoveRedEye />
                                        </button>
                                        <button>
                                            <FiEdit />
                                        </button>
                                        <button>
                                            <FiTrash2 />
                                        </button>
                                    </div>
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

export default CustomerListApproved;
