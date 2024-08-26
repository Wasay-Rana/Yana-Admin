import React from 'react';

import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

import './layout.css'; 


function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
