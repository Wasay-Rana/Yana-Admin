import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserAlt, FaChartLine, FaComments, FaCalendarAlt, FaWrench, FaCommentAlt, FaBars } from 'react-icons/fa';

import logo from '../../assets/logo.png';
import menubtn from '../../assets/menu_button.png'; 

import './sidebar.css';


function handleAddMenuClick() {
  // Your click handling logic here
}
function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className="logo">
        <img src={logo} alt="YANA Logo" />
        {/* <span></span> */}
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end activeClassName="active"><FaHome /><span>Dashboard</span></NavLink>
          </li>
          <li>
            <NavLink to="/order" activeClassName="active"><FaUserAlt /><span>Order</span></NavLink>
          </li>
          <li>
            <NavLink to="/customers" activeClassName="active"><FaUserAlt /><span>Customer</span></NavLink>
          </li>
          <li>
            <NavLink to="/analytics" activeClassName="active"><FaChartLine /><span>Analytics</span></NavLink>
          </li>
          <li>
            <NavLink to="/reviews" activeClassName="active"><FaComments /><span>Reviews</span></NavLink>
          </li>
          <li>
            <NavLink to="/vendor" activeClassName="active"><FaWrench /><span>Vendor</span></NavLink>
          </li>
          <li>
            <NavLink to="/food" activeClassName="active"><FaCalendarAlt /><span>Food</span></NavLink>
          </li>
          <li>
            <NavLink to="/chat" activeClassName="active"><FaCommentAlt /><span>Chat</span></NavLink>
          </li>
        </ul>
      </nav>
      <div className="footer">
        {/* <div className="add-menu-btn">
          <FaWrench />
          <span>Add Menus</span>
        </div> */}


        <button className="add-menu-button" onClick={handleAddMenuClick}>
          <img src={menubtn} alt="Add Menu" />
        </button>
        {/* <h3>Yana Medical Admin Dashboard</h3>
        <h4>© 2024 All Rights Reserved</h4>
        <h6>Made By Yana Designer Team.</h6> */}
      </div>
    </div>
  );
}

export default Sidebar;
