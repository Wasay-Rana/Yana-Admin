import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow ml-[var(--sidebar-width)] p-5 flex flex-col">
        <Header />
        <main className="flex-grow overflow-y-auto h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
