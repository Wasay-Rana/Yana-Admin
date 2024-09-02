import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { BiChevronsLeft } from 'react-icons/bi';

import { GoHome } from "react-icons/go";
import { VscListSelection } from "react-icons/vsc";
import { LuUsers2 } from "react-icons/lu";
import { BiFoodMenu } from "react-icons/bi";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaRegChartBar } from 'react-icons/fa';
import { RiPencilLine } from "react-icons/ri";
import { BsChatLeftDots } from "react-icons/bs";


import logo from '../../assets/yanaLogo.png';
import logoCollapsed from '../../assets/mainLogo.png';
import AddMenuButton from '../../elements/addMenuButton/AddMenuButton';
import { toggleSidebar } from './SidebarSlice.jsx';

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


import './sidebar.css';

function handleAddMenuClick() {
  // Your click handling logic here
}

function Sidebar() {
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);
  const dispatch = useDispatch();

  const toggleSidebarState = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo-btn">
        <div className="logo">
          {!isCollapsed && <img src={logo} alt="YANA Logo" />}
        </div>

        <div className="toggle-btn" onClick={toggleSidebarState}>
          {isCollapsed ? (
            <img src={logoCollapsed} alt="Collapsed Logo" style={{ width: 44, height: 44 }} />
          ) : (
            <BiChevronsLeft size={28} color="#d61125" />
          )}
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              <GoHome />
              <span data-tooltip-id="my-tooltip" data-tooltip-content="Dashboard">Dashboard</span>
              <Tooltip id="my-tooltip" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={({ isActive }) => (isActive ? 'active' : '')}>
              <VscListSelection />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className={({ isActive }) => (isActive ? 'active' : '')}>
              <LuUsers2 />
              <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/meals" className={({ isActive }) => (isActive ? 'active' : '')}>
              <BiFoodMenu />
              <span>Meals</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/vendors" className={({ isActive }) => (isActive ? 'active' : '')}>
              <MdOutlineFoodBank />
              <span>Vendors</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaRegChartBar />
              <span>Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" className={({ isActive }) => (isActive ? 'active' : '')}>
              <RiPencilLine />
              <span>Reviews</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat" className={({ isActive }) => (isActive ? 'active' : '')}>
              <BsChatLeftDots />
              <span>Chat</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <AddMenuButton isCollapsed={isCollapsed} onClick={handleAddMenuClick} />
      </div>
    </div>
  );
}

export default Sidebar;
