import React from 'react';
import { FaMoneyBillAlt, FaShoppingCart, FaUserFriends, FaChartLine } from 'react-icons/fa';
import IconActiveUsers from "../../assets/customIcons/IconActiveUsers.svg";
import IconCancelled from "../../assets/customIcons/IconCancelled.svg";
import IconDelivered from "../../assets/customIcons/IconDelivered.svg";
import IconRevenue from "../../assets/customIcons/IconRevenue.svg";


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
            <img src={IconActiveUsers} alt="Icon Active Users" />
          </div>
          <div className="stat-info">
            <h3>$128K</h3>
            <p>Total Revenue</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
          <img src={IconDelivered} alt="Icon Delivered" />
          </div>
          <div className="stat-info">
            <h3>357</h3>
            <p>Total Orders</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
          <img src={IconCancelled} alt="Icon Cancelled" />
          </div>
          <div className="stat-info">
            <h3>75</h3>
            <p>Total Customers</p>
          </div>
          
        </div>
        <div className="stat-card">
          <div className="stat-icon">
          <img src={IconRevenue} alt="Icon Revenue" />
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