import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../../elements/searchBar/SearchBar';
import { FiTrash2, FiEdit, FiPlusCircle } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import './customerAllTabs.css';

const CustomerAllTabs = () => {
    const navigate = useNavigate();

    // Data for Active/Inactive Customers
    const activeInactiveCustomers = [
        { id: 1, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 2, name: 'Robert Dawn', insurance: 'Keystone', phone: '(205) 555-0101', email: 'robert@yahoo.com', meals: 7, status: 'Active' },
        // Ensure all IDs are unique
    ];

    // Data for Approved/Pending Members
    const approvedPendingMembers = [
        { id: 1, member_ID: 1234567, medicaid_ID: 10101010, name: "Marvin McKinney", phone: '(205) 555-0100', request_type: 'MEDICAL', status: 'Approved' },
        { id: 2, member_ID: 1234568, medicaid_ID: 10101011, name: "Jane Cooper", phone: '(205) 555-0100', request_type: 'MEDICAL', status: 'Pending' },
        // Ensure all IDs are unique
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [filterStatus, setFilterStatus] = useState('Active'); // State to manage tab selection
    const customersPerPage = 5;

    // Determine which data to filter based on the selected tab
    const dataToDisplay = (filterStatus === 'Active' || filterStatus === 'Inactive') ? activeInactiveCustomers : approvedPendingMembers;

    // Filter data based on the selected tab
    const filteredData = dataToDisplay.filter(item => item.status === filterStatus);

    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentData = filteredData.slice(indexOfFirstCustomer, indexOfLastCustomer);
    const totalPages = Math.ceil(filteredData.length / customersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePlusCircleClick = () => {
        navigate('/customers/client-details');
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

    const renderTableHeaders = () => {
        if (filterStatus === 'Active' || filterStatus === 'Inactive') {
            return (
                <tr>
                    <th>Customer Name</th>
                    <th>Insurance</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Meals</th>
                    <th>Status</th>
                    <th>Edit</th>
                </tr>
            );
        } else {
            return (
                <tr>
                    <th>Member ID</th>
                    <th>Medicaid ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Request Type</th>
                    <th>Request Status</th>
                    <th>Actions</th>
                </tr>
            );
        }
    };

    const renderTableRows = () => {
        if (filterStatus === 'Active' || filterStatus === 'Inactive') {
            return currentData.map((customer) => (
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
            ));
        } else {
            return currentData.map((member) => (
                <tr key={member.id}>
                    <td>{member.member_ID}</td>
                    <td>{member.medicaid_ID}</td>
                    <td>{member.name}</td>
                    <td>{member.phone}</td>
                    <td>{member.request_type}</td>
                    <td>
                        <div className="request-status">
                            <span className={`status ${member.status.toLowerCase()}`}>
                                {member.status}
                            </span>
                            {member.status === 'Approved' && (
                                <button onClick={handlePlusCircleClick} className='status-icon-button'>
                                    <FiPlusCircle className='status-icon' />
                                </button>
                            )}
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
            ));
        }
    };

    return (
        <div className="customer-list-container">
            <div className="customer-list">
                <div className="table-header">
                    <div className='htext'>
                        <h2>All Customers</h2>
                        <div className="tabs">
                            <button
                                className={`tab-button ${filterStatus === 'Active' ? 'active' : ''}`}
                                onClick={() => setFilterStatus('Active')}
                            >
                                Active
                            </button>
                            <button
                                className={`tab-button ${filterStatus === 'Inactive' ? 'inactive' : ''}`}
                                onClick={() => setFilterStatus('Inactive')}
                            >
                                Inactive
                            </button>
                            <button
                                className={`tab-button ${filterStatus === 'Approved' ? 'approved' : ''}`}
                                onClick={() => setFilterStatus('Approved')}
                            >
                                Approved
                            </button>
                            <button
                                className={`tab-button ${filterStatus === 'Pending' ? 'pending' : ''}`}
                                onClick={() => setFilterStatus('Pending')}
                            >
                                Pending
                            </button>
                        </div>
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
                        {renderTableHeaders()}
                    </thead>
                    <tbody>
                        {renderTableRows()}
                    </tbody>
                </table>

                <div className="pagination-container">
                    <div className="pagination-info">
                        Showing data {indexOfFirstCustomer + 1} to {Math.min(indexOfLastCustomer, filteredData.length)} of {filteredData.length} entries
                    </div>
                    <div className="pagination-buttons">
                        {renderPaginationButtons()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerAllTabs;
