// Sidebar.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiChevronsLeft } from 'react-icons/bi';
import { FaHome, FaUserAlt, FaChartLine, FaComments, FaCalendarAlt, FaWrench, FaCommentAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/yanaLogo.png';
import logoCollapsed from '../../assets/mainLogo.png';
import AddMenuButton from '../../elements/addMenuButton/AddMenuButton';
import { toggleSidebar } from './SidebarSlice.jsx';

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
        <AddMenuButton isCollapsed={isCollapsed} onClick={handleAddMenuClick} />
      </div>
    </div>
  );
}

export default Sidebar;
