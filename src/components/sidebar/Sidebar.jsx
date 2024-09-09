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
import { IoChevronDownOutline } from "react-icons/io5";
import logo from '../../assets/yanaLogo.png';
import logoCollapsed from '../../assets/mainLogo.png';
import { toggleSidebar } from './SidebarSlice.jsx';
import AddMenuButton from '../../elements/addMenuButton/AddMenuButton.jsx';

function Sidebar() {
    const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isCustomersExpanded, setIsCustomersExpanded] = useState(false);
    const [isActive, setIsActive] = useState(false); // State for active button

    const toggleSidebarState = () => {
        dispatch(toggleSidebar());
    };

    const toggleCustomersSection = () => {
        setIsCustomersExpanded((prev) => !prev);
        setIsActive(true); // Set button as active when clicked
    };

    return (
        <div
            className={`flex flex-col justify-between bg-white h-screen p-5 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20 p-5 pt-0' : 'w-64'}`}
        >


            <div
                className={`flex items-center justify-center ${isCollapsed ? 'gap-0 mb-[60%]' : 'mb-12'
                    } transition-all duration-300 ease-in-out`}
            >
                <div>
                    {!isCollapsed && (
                        <img
                            src={logo}
                            alt="YANA Logo"
                            className={`transition-all duration-300 ease-in-out ${isCollapsed
                                ? 'w-full h-[50%] mt-2'
                                : 'w-[200px] h-[70px]'
                                }`}
                        />
                    )}
                </div>

                <div className={`cursor-pointer transition-all duration-300 ease-in-out ${isCollapsed
                    ? 'relative left-1/2 top-[85%] transform -translate-x-1/2'
                    : ''
                    }`} onClick={toggleSidebarState}>
                    {isCollapsed ? (
                        <img src={logoCollapsed} alt="Collapsed Logo" className="w-11 h-11" />
                    ) : (
                        <BiChevronsLeft size={28} color="#d61125" />
                    )}
                </div>
            </div>

            <nav>
                <ul className="list-none p-0 m-0">
                    {[
                        { to: "/dashboard", icon: <GoHome />, label: "Dashboard" },
                        { to: "/orders", icon: <VscListSelection />, label: "Orders" },
                        { to: "/customers", icon: <LuUsers2 />, label: "Customers" },
                        { to: "/meals", icon: <BiFoodMenu />, label: "Meals" },
                        { to: "/vendors", icon: <MdOutlineFoodBank />, label: "Vendors" },
                        { to: "/analytics", icon: <FaRegChartBar />, label: "Analytics" },
                        { to: "/reviews", icon: <RiPencilLine />, label: "Reviews" },
                        { to: "/chat", icon: <BsChatLeftDots />, label: "Chat" },
                    ].map(({ to, icon, label }) => (
                        <li key={to} className="mb-3 relative">
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `flex items-center font-medium no-underline text-base p-2.5 rounded-lg relative transition-all duration-300 ease-in-out ${isActive
                                        ? `text-red-600 ${isCollapsed
                                            ? "bg-[#ffe6e9] before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:w-9 before:h-9 before:rounded-md before:transform before:-translate-x-1/2 before:-translate-y-1/2"
                                            : "bg-[#ffe6e9] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-red-600 before:rounded-l-md pl-4"
                                        }`
                                        : `text-gray-800 ${isCollapsed ? "justify-center rounded-full" : "pl-4"
                                        }`
                                    }`
                                }
                            >
                                <span
                                    className={`text-lg ${isCollapsed ? "flex items-center justify-center" : "mr-4"
                                        } ${isActive && isCollapsed ? '' : "text-inherit"}`}
                                >
                                    {icon}
                                </span>
                                <span className={isCollapsed ? "hidden" : ""}>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={`footer ${isCollapsed ? 'py-2 text-xs' : 'py-5 text-xs'} text-center text-gray-500 transition-all duration-300 ease-in-out`}>
                {isCollapsed ? null : <p className="my-1"></p>}
                <AddMenuButton isCollapsed={isCollapsed} onClick={() => navigate('/meals')} />
            </div>



        </div>
    );
}

export default Sidebar;
