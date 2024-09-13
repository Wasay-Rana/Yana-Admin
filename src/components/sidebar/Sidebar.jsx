import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
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
import { toggleSidebar } from './SidebarSlice.jsx';
import AddMenuButton from '../../elements/addMenuButton/AddMenuButton.jsx';

function Sidebar() {
    const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isCustomersExpanded, setIsCustomersExpanded] = useState(false);

    const toggleSidebarState = () => {
        dispatch(toggleSidebar());
    };

    const toggleCustomersSection = () => {
        setIsCustomersExpanded((prev) => !prev);
    };

    return (
        <div
            className={`flex flex-col justify-between bg-white min-h-screen p-5 transition-all duration-500 ease-in-out ${
                isCollapsed ? 'w-20 p-5 pt-0' : 'w-64'
            }`}
        >
            {/* Logo and Collapse Button */}
            <div className="flex items-center justify-between mb-12 transition-all duration-500 ease-in-out">
                <div className="overflow-hidden">
                    <img
                        src={logo}
                        alt="YANA Logo"
                        className={`transition-all duration-500 ease-in-out ${
                            isCollapsed
                                ? 'w-0 h-0 opacity-0'
                                : 'w-[200px] h-[70px] opacity-100'
                        }`}
                    />
                </div>

                <div 
                    className={`cursor-pointer transition-all duration-500 ease-in-out ${
                        isCollapsed
                            ? 'relative left-1/2 top-[85%] transform -translate-x-1/2'
                            : ''
                    }`} 
                    onClick={toggleSidebarState}
                >
                    {isCollapsed ? (
                        <img src={logoCollapsed} alt="Collapsed Logo" className="w-11 h-11 animate-pulse" />
                    ) : (
                        <BiChevronsLeft size={28} color="#d61125" className="hover:scale-110 transition-transform duration-300" />
                    )}
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1">
                <ul className="list-none p-0 m-0">
                    {[
                        { to: "/dashboard", icon: <GoHome />, label: "Dashboard" },
                        { to: "/orders", icon: <VscListSelection />, label: "Orders" },
                        { to: "", icon: <LuUsers2 />, label: "Customers", hasSubmenu: true },
                        { to: "/meals", icon: <BiFoodMenu />, label: "Meals" },
                        { to: "/vendors", icon: <MdOutlineFoodBank />, label: "Vendors" },
                        { to: "/analytics", icon: <FaRegChartBar />, label: "Analytics" },
                        { to: "/reviews", icon: <RiPencilLine />, label: "Reviews" },
                        { to: "/chat", icon: <BsChatLeftDots />, label: "Chat" },
                    ].map(({ to, icon, label, hasSubmenu }) => (
                        <li key={to} className="mb-3 relative">
                            <div className="flex flex-col">
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `flex items-center font-medium no-underline text-base p-2.5 rounded-lg relative transition-all duration-300 ease-in-out ${
                                            hasSubmenu ? '' : // Only apply the red highlight if not hasSubmenu
                                            isActive
                                                ? `text-red-600 bg-[#ffe6e9] ${
                                                    isCollapsed
                                                        ? "before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:w-9 before:h-9 before:rounded-md before:transform before:-translate-x-1/2 before:-translate-y-1/2"
                                                        : "before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-red-600 before:rounded-l-md"
                                                }`
                                                : `text-gray-800 hover:bg-gray-100`
                                        } ${isCollapsed ? "justify-center rounded-full" : "pl-3"}`
                                    }
                                    onClick={hasSubmenu ? toggleCustomersSection : undefined}
                                >
                                    <span
                                        className={`text-lg ${
                                            isCollapsed ? "flex items-center justify-center" : "mr-4"
                                        } transition-transform duration-300 ease-in-out transform group-hover:scale-110`}
                                    >
                                        {icon}
                                    </span>
                                    <span className={`${isCollapsed ? "hidden" : ""} transition-opacity duration-300 ease-in-out ${isCollapsed ? "opacity-0" : "opacity-100"}`}>
                                        {label}
                                    </span>
                                </NavLink>
                                {/* Submenu for Customers */}
                                {hasSubmenu && isCustomersExpanded && !isCollapsed && (
                                    <ul className="ml-10 mt-2 list-none p-0 m-0">
                                        <li>
                                            <NavLink
                                                to="/customers"
                                                className={({ isActive }) =>
                                                    `flex items-center font-medium p-2 text-sm py-2 transition-colors duration-200 rounded ${
                                                        isActive ? "text-red-600 bg-[#ffe6e9]" : "text-gray-800 hover:text-red-600 hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                All Customers
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/participants"
                                                className={({ isActive }) =>
                                                    `flex items-center font-medium p-2 text-sm py-2 transition-colors duration-200 rounded ${
                                                        isActive ? "text-red-600 bg-[#ffe6e9]" : "text-gray-800 hover:text-red-600 hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                Participants Creds
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
            <div className={`footer ${isCollapsed ? 'py-2 text-xs' : 'py-5 text-xs'} text-center text-gray-500 transition-all duration-300 ease-in-out`}>
                {isCollapsed ? null : <p className="my-1"></p>}
                <AddMenuButton isCollapsed={isCollapsed} onClick={() => navigate('/meals')} />
            </div>
                </ul>


            </nav>
        </div>
    );
}

export default Sidebar;
