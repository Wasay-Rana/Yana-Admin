// components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import '../styles/Layout.css'; // Optional: For any specific layout styles

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
