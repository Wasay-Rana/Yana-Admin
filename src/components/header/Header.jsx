// Header.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import IconNotification from '../../assets/customIcons/IconNotification.svg';
import IconChat from '../../assets/customIcons/IconChat.svg';
import Avatar from '../../assets/avatar.png';

import SearchBar from '../../elements/searchBar/SearchBar';

import './header.css';

function Header() {
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed); 
  return (
    <div className="header">
      <div className={`search-bar ${isCollapsed ? 'expanded' : ''}`}> 
        <SearchBar />
      </div>
      <div className="user-actions">
        <div className="notifications">
          <img src={IconNotification} alt="Notification" />
          <span className="notification-count">3</span>
        </div>
        <div className="chat-icon">
          <img src={IconChat} alt="Chat" />
          <span className="notification-count">3</span>
        </div>
        <div className="profile-info">
          <p>Hello, <span>Wasay</span></p>
          <img src={Avatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
