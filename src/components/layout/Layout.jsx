import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-5">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;