import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../elements/searchBar/SearchBar';
import { FiTrash2, FiEdit, FiEdit2, FiPlusCircle } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const CustomerAllTabs = () => {
    const navigate = useNavigate();

    const activeInactiveCustomers = [
        { id: 1, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 2, name: 'Robert Dawn', insurance: 'Keystone', phone: '(205) 555-0101', email: 'robert@yahoo.com', meals: 7, status: 'Active' },
        { id: 3, name: 'Floyd Miles1', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 4, name: 'Robert Dawn1', insurance: 'Keystone', phone: '(205) 555-0101', email: 'robert@yahoo.com', meals: 7, status: 'Active' },
        { id: 5, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 6, name: 'Robert Dawn', insurance: 'Keystone', phone: '(205) 555-0101', email: 'robert@yahoo.com', meals: 7, status: 'Active' },
        { id: 7, name: 'Floyd Miles1', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 8, name: 'Robert Dawn1', insurance: 'Keystone', phone: '(205) 555-0101', email: 'robert@yahoo.com', meals: 7, status: 'Active' },
        { id: 9, name: 'Robert Dawn', insurance: 'Keystone', phone: '(205) 555-0101', email: 'robert@yahoo.com', meals: 7, status: 'Active' },
        { id: 10, name: 'Floyd Miles1', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
        { id: 11, name: 'Robert Dawn1', insurance: 'Keystone', phone: '(205) 555-0101', email: 'robert@yahoo.com', meals: 7, status: 'Active' },
        // Ensure all IDs are unique
    ];

    const approvedPendingMembers = [
        { id: 1, member_ID: 1234567, medicaid_ID: 10101010, name: "Marvin McKinney", phone: '(205) 555-0100', request_type: 'MEDICAL', status: 'Approved' },
        { id: 2, member_ID: 1234568, medicaid_ID: 10101011, name: "Jane Cooper", phone: '(205) 555-0100', request_type: 'MEDICAL', status: 'Pending' },
        { id: 3, member_ID: 1234567, medicaid_ID: 10101010, name: "Marvin McKinney1", phone: '(205) 555-0100', request_type: 'MEDICAL', status: 'Approved' },
        { id: 4, member_ID: 1234568, medicaid_ID: 10101011, name: "Jane Cooper1", phone: '(205) 555-0100', request_type: 'MEDICAL', status: 'Pending' },
        // Ensure all IDs are unique
    ];

    const [filterStatus, setFilterStatus] = useState('Active');
    const [currentPage, setCurrentPage] = useState(1);
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
                    className={`px-2 py-0 text-sm font-medium text-gray-600 border border-gray-300 rounded-full ${currentPage === i ? 'bg-yana-gold border-none text-white' : ' bg-slate-200 bg-'}`}
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
                <tr className="bg-gray-50">
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Name</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Insurance</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Phone Number</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Email</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Meals</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Status</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Edit</th>
                </tr>
            );
        } else {
            return (
                <tr className="bg-gray-50">
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Member ID</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Medicaid ID</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Name</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Phone</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Request Type</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Request Status</th>
                    <th className="text-left text-gray-500 font-medium py-3 px-5">Actions</th>
                </tr>
            );
        }
    };

    const renderTableRows = () => {
        if (filterStatus === 'Active' || filterStatus === 'Inactive') {
            return currentData.map((customer) => (
                <tr key={customer.id} className="border-gray-200 border-b">
                    <td className="py-3 px-4">{customer.name}</td>
                    <td className="py-3 px-4">{customer.insurance}</td>
                    <td className="py-3 px-4">{customer.phone}</td>
                    <td className="py-3 px-4">{customer.email}</td>
                    <td className="py-3 px-4">{customer.meals}</td>
                    <td className="py-3 px-4">
                        <span                   className={`inline-block py-1 px-4 rounded-full text-sm font-medium ${
                    customer.status === 'Active'
                      ? 'bg-yana-light-green text-yana-green border border-yana-green px-5'
                      : 'bg-red-100 text-yana-red border border-yana-red'
                  }`}
                >
                  {customer.status}
                        </span>
                    </td>
                    <td className="py-3 px-4">
                        <button className="px-3 py-[1px] bg-yana-gold text-white rounded-full flex items-center gap-1">
                            <FiEdit2 fontSize={14}/>
                            Edit</button>
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
                            <span className={`px-3 py-1 rounded-full text-sm ${member.status === 'Approved'  
                                
                                ? 'bg-yana-light-green text-yana-green border border-yana-green'
                      : 'bg-red-100 text-red-700 px-5 border border-red-600'}`}>
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
                        <div className='flex gap-2'>
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
        <div className="bg-white rounded-2xl p-6 font-poppins overflow-auto">

        {/* // <div className="1 bg-white rounded-2xl p-6 font-poppins overflow-hidden"> */}
        {/* <div className="bg-white rounded-2xl p-6 font-poppins"> */}
            <div className="mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">All Customers</h2>
                        <div className="flex gap-4 mt-2 mb-2 ml-4">
                            <button
                                className={`text-gray-500 ${filterStatus === 'Active' ? 'text-yana-green2 underline' : ''}`}
                                onClick={() => setFilterStatus('Active')}
                            >
                                Active
                            </button>
                            <button
                                className={`text-gray-500 ${filterStatus === 'Inactive' ? 'text-yana-red underline' : ''}`}
                                onClick={() => setFilterStatus('Inactive')}
                            >
                                Inactive
                            </button>
                            <button
                                className={`text-gray-500 ${filterStatus === 'Approved' ? 'text-yana-green2 underline' : ''}`}
                                onClick={() => setFilterStatus('Approved')}
                            >
                                Approved
                            </button>
                            <button
                                className={`text-gray-500 ${filterStatus === 'Pending' ? 'text-yana-red underline' : ''}`}
                                onClick={() => setFilterStatus('Pending')}
                            >
                                Pending
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <SearchBar className='h-8 bg-[#F9FBFF] border border-gray-100 rounded-md px-2'/>
                        <select className="h-8 bg-[#F9FBFF] border-gray-100 rounded-md px-2">
                            <option value="newest">Sort by: Newest</option>
                            <option value="oldest">Sort by: Oldest</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* <table className="w-full bg-gray-50 border border-gray-200 rounded-md shadow-sm overflow-x-auto"> */}

            <table className="w-full border-collapse overflow-x-auto">
                <thead>
                    {renderTableHeaders()}
                </thead>
                <tbody>
                    {renderTableRows()}
                </tbody>
            </table>

            <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-400 font-medium">
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