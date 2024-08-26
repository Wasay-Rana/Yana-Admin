import React from 'react';
import { FaMoneyBillAlt, FaShoppingCart, FaUserFriends, FaChartLine } from 'react-icons/fa';
import CustomerTable from '../../components/customerTable/CustomerTable';
import './dashboard.css';

function Dashboard() {
  const customers = [
    { id: 1, name: 'Jane Cooper', insurance: 'Nextleet', phone: '(225) 555-0118', email: 'jane@microsoft.com', meals: 14, status: 'Active' },
    { id: 2, name: 'Floyd Miles', insurance: 'Nextleet', phone: '(205) 555-0100', email: 'floyd@yahoo.com', meals: 7, status: 'Inactive' },
    { id: 3, name: 'Jane Cooper', insurance: 'Nextleet', phone: '(225) 555-0118', email: 'jane@microsoft.com', meals: 14, status: 'Active' },
    { id: 4, name: 'Jane Cooper', insurance: 'Nextleet', phone: '(225) 555-0118', email: 'jane@microsoft.com', meals: 14, status: 'Active' },
    { id: 5, name: 'Jane Cooper', insurance: 'Nextleet', phone: '(225) 555-0118', email: 'jane@microsoft.com', meals: 14, status: 'Active' },

    // Add more customer data here
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <FaMoneyBillAlt />
          </div>
          <div className="stat-info">
            <h3>$128K</h3>
            <p>Total Revenue</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaShoppingCart />
          </div>
          <div className="stat-info">
            <h3>357</h3>
            <p>Total Orders</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaUserFriends />
          </div>
          <div className="stat-info">
            <h3>75</h3>
            <p>Total Customers</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaChartLine />
          </div>
          <div className="stat-info">
            <h3>65</h3>
            <p>New Customers</p>
          </div>
        </div>
      </div>
      <CustomerTable customers={customers} />
    </div>
  );
}

export default Dashboard;