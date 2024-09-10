import React from 'react';
import { FaMoneyBillAlt, FaShoppingCart, FaUserFriends, FaChartLine } from 'react-icons/fa';
import CustomerTable from '../../components/customerTable/CustomerTable';
import IconActiveUsers from "../../assets/customIcons/IconActiveUsers.svg";
import IconCancelled from "../../assets/customIcons/IconCancelled.svg";
import IconDelivered from "../../assets/customIcons/IconDelivered.svg";
import IconRevenue from "../../assets/customIcons/IconRevenue.svg";

function Dashboard() {
  const customers = [
    { id: 1, name: 'Jane Cooper', insurance: 'Nextleet', phone: '(225) 555-0118', email: 'jane@microsoft.com', meals: 14, status: 'Active' },
    { id: 2, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
    { id: 3, name: 'Jane Cooper', insurance: 'Nextleet', phone: '(225) 555-0118', email: 'jane@microsoft.com', meals: 14, status: 'Active' },
    { id: 4, name: 'Jane Cooper', insurance: 'Nextleet', phone: '(225) 555-0118', email: 'jane@microsoft.com', meals: 14, status: 'Active' },
    { id: 5, name: 'Jane Cooper', insurance: 'Nextleet', phone: '(225) 555-0118', email: 'jane@microsoft.com', meals: 14, status: 'Active' },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stat Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <img src={IconActiveUsers} alt="Icon Active Users" className="w-15 h-15 mr-4" />
          <div>
            <h3 className="text-2xl font-bold mb-1">$128K</h3>
            <p className="text-gray-500 text-sm">Total Revenue</p>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <img src={IconDelivered} alt="Icon Delivered" className="w-15 h-15 mr-4" />
          <div>
            <h3 className="text-2xl font-bold mb-1">357</h3>
            <p className="text-gray-500 text-sm">Total Orders</p>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <img src={IconCancelled} alt="Icon Cancelled" className="w-15 h-15 mr-4" />
          <div>
            <h3 className="text-2xl font-bold mb-1">75</h3>
            <p className="text-gray-500 text-sm">Total Customers</p>
          </div>
        </div>

        {/* Stat Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <img src={IconRevenue} alt="Icon Revenue" className="w-15 h-15 mr-4" />
          <div>
            <h3 className="text-2xl font-bold mb-1">65</h3>
            <p className="text-gray-500 text-sm">New Customers</p>
          </div>
        </div>
      </div>

      <CustomerTable customers={customers} />
    </div>
  );
}

export default Dashboard;
