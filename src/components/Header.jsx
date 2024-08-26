import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import '../styles/header.css';

function Header() {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="user-actions">
        <div className="notifications">
          <FaBell />
          <span className="notification-count">3</span>
        </div>
        <div className="user-profile">
          <FaUserCircle />
          <span>Wasay Rana</span>
        </div>
      </div>
    </div>
  );
}

export default Header;