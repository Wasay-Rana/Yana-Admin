import React from 'react';
import SearchBar from '../../elements/searchBar/SearchBar';

function CustomerTable({ customers }) {
  return (
    <div className="bg-white rounded-2xl p-6 font-poppins">
      <div className="flex justify-between items-center mb-6">
        <div className="htext">
          <h2 className="text-2xl font-semibold">All Customers</h2>
          <h5 className="text-green-500 font-medium">Active Members</h5>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <div className="relative">
            <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-600 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="newest">Sort by: Newest</option>
              <option value="oldest">Sort by: Oldest</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left text-gray-500 font-medium py-3 px-5">Customer Name</th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">Insurance</th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">Phone Number</th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">Email</th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">Meals</th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-b">
              <td className="py-3 px-5">{customer.name}</td>
              <td className="py-3 px-5">{customer.insurance}</td>
              <td className="py-3 px-5">{customer.phone}</td>
              <td className="py-3 px-5">{customer.email}</td>
              <td className="py-3 px-5">{customer.meals}</td>
              <td className="py-3 px-5">
                <span
                  className={`inline-block py-1 px-4 rounded-full text-sm font-medium ${
                    customer.status === 'Active'
                      ? 'bg-green-100 text-green-700 border border-green-600'
                      : 'bg-red-100 text-red-700 border border-red-600'
                  }`}
                >
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-6 text-gray-500">
        <span>Showing data 1 to 8 of 256K entries</span>
        <div className="flex space-x-2">
          <span className="font-bold text-orange-500 cursor-pointer">1</span>
          <span className="cursor-pointer">2</span>
          <span className="cursor-pointer">3</span>
          <span className="cursor-pointer">4</span>
          <span className="cursor-pointer">...</span>
          <span className="cursor-pointer">33</span>
        </div>
      </div>
    </div>
  );
}

export default CustomerTable;