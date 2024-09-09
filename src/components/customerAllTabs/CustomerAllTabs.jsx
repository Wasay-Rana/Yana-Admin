import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../elements/searchBar/SearchBar';
import { FiTrash2, FiEdit, FiPlusCircle } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const CustomerAllTabs = () => {
    const navigate = useNavigate();

    const activeInactiveCustomers = [
        { id: 1, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 2, name: 'Robertooo Dawn', insurance: 'Keystone', phone: '(205) 555-0101', email: 'robert@yahoo.com', meals: 7, status: 'Active' },
    ];

    const approvedPendingMembers = [
        { id: 1, member_ID: 1234567, medicaid_ID: 10101010, name: "Marvin McKinney", phone: '(205) 555-0100', request_type: 'MEDICAL', status: 'Approved' },
        { id: 2, member_ID: 1234568, medicaid_ID: 10101011, name: "Jane Cooper", phone: '(205) 555-0100', request_type: 'MEDICAL', status: 'Pending' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [filterStatus, setFilterStatus] = useState('Active');
    const customersPerPage = 5;

    const dataToDisplay = (filterStatus === 'Active' || filterStatus === 'Inactive') ? activeInactiveCustomers : approvedPendingMembers;

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
                    className={`px-3 py-2 text-gray-600 border border-gray-300 rounded-lg ${currentPage === i ? 'bg-orange-500 text-white' : ''}`}
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
                    <th className="text-left py-3 px-4">Customer Name</th>
                    <th className="text-left py-3 px-4">Insurance</th>
                    <th className="text-left py-3 px-4">Phone Number</th>
                    <th className="text-left py-3 px-4">Email</th>
                    <th className="text-left py-3 px-4">Meals</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Edit</th>
                </tr>
            );
        } else {
            return (
                <tr>
                    <th className="text-left py-3 px-4">Member ID</th>
                    <th className="text-left py-3 px-4">Medicaid ID</th>
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Phone</th>
                    <th className="text-left py-3 px-4">Request Type</th>
                    <th className="text-left py-3 px-4">Request Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                </tr>
            );
        }
    };

    const renderTableRows = () => {
        if (filterStatus === 'Active' || filterStatus === 'Inactive') {
            return currentData.map((customer) => (
                <tr key={customer.id} className="border-b">
                    <td className="py-3 px-4">{customer.name}</td>
                    <td className="py-3 px-4">{customer.insurance}</td>
                    <td className="py-3 px-4">{customer.phone}</td>
                    <td className="py-3 px-4">{customer.email}</td>
                    <td className="py-3 px-4">{customer.meals}</td>
                    <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${customer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {customer.status}
                        </span>
                    </td>
                    <td className="py-3 px-4">
                        <button className="px-2 py-1 text-white bg-blue-500 rounded">Edit</button>
                    </td>
                </tr>
            ));
        } else {
            return currentData.map((member) => (
                <tr key={member.id} className="border-b">
                    <td className="py-3 px-4">{member.member_ID}</td>
                    <td className="py-3 px-4">{member.medicaid_ID}</td>
                    <td className="py-3 px-4">{member.name}</td>
                    <td className="py-3 px-4">{member.phone}</td>
                    <td className="py-3 px-4">{member.request_type}</td>
                    <td className="py-3 px-4">
                        <div className="flex items-center justify-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-sm ${member.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {member.status}
                            </span>
                            {member.status === 'Approved' && (
                                <button onClick={handlePlusCircleClick} className='text-yellow-500'>
                                    <FiPlusCircle />
                                </button>
                            )}
                        </div>
                    </td>
                    <td className="py-3 px-4">
                        <div className='flex gap-2 justify-around'>
                            <button><MdOutlineRemoveRedEye className="text-gray-500" /></button>
                            <button><FiEdit className="text-gray-500" /></button>
                            <button><FiTrash2 className="text-gray-500" /></button>
                        </div>
                    </td>
                </tr>
            ));
        }
    };

    return (
        <div className="bg-white rounded-2xl p-6 font-poppins">
            <div className="mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">All Customers</h2>
                        <div className="flex gap-4 mt-4">
                            <button
                                className={`text-gray-500 ${filterStatus === 'Active' ? 'text-green-500 underline' : ''}`}
                                onClick={() => setFilterStatus('Active')}
                            >
                                Active
                            </button>
                            <button
                                className={`text-gray-500 ${filterStatus === 'Inactive' ? 'text-red-500 underline' : ''}`}
                                onClick={() => setFilterStatus('Inactive')}
                            >
                                Inactive
                            </button>
                            <button
                                className={`text-gray-500 ${filterStatus === 'Approved' ? 'text-green-500 underline' : ''}`}
                                onClick={() => setFilterStatus('Approved')}
                            >
                                Approved
                            </button>
                            <button
                                className={`text-gray-500 ${filterStatus === 'Pending' ? 'text-red-500 underline' : ''}`}
                                onClick={() => setFilterStatus('Pending')}
                            >
                                Pending
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <SearchBar />
                        <select className="h-8 bg-gray-50 border border-gray-300 rounded-md px-2">
                            <option value="newest">Sort by: Newest</option>
                            <option value="oldest">Sort by: Oldest</option>
                        </select>
                    </div>
                </div>
            </div>

            <table className="w-full border-collapse table-fixed">
                <thead>
                    {renderTableHeaders()}
                </thead>
                <tbody>
                    {renderTableRows()}
                </tbody>
            </table>

            <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-500">
                    Showing data {indexOfFirstCustomer + 1} to {Math.min(indexOfLastCustomer, filteredData.length)} of {filteredData.length} entries
                </div>
                <div className="flex gap-2">
                    {renderPaginationButtons()}
                </div>
            </div>
        </div>
    );
};

export default CustomerAllTabs;
