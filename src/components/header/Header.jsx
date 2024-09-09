import { React, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IoIosLogOut } from "react-icons/io";

import IconNotification from '../../assets/customIcons/IconNotification.svg';
import IconChat from '../../assets/customIcons/IconChat.svg';
import Avatar from '../../assets/avatar.png';
import SearchBar from '../../elements/searchBar/SearchBar';
import ButtonWithIcon from '../../elements/buttonWithIcon/ButtonWithIcon';

function Header() {
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);
  const [showLogout, setShowLogout] = useState(false);
  const logoutRef = useRef(null);

  const handleButtonClick = () => {
    setShowLogout((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (logoutRef.current && !logoutRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    };

    if (showLogout) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showLogout]);

  return (
    <div className="flex justify-between items-center p-2.5 mb-5">
      <div className="flex-grow w-[85%] transition-all duration-300 ease-in-out mr-4">
        <SearchBar />
      </div>
      <div className="flex items-center">
        <div className="relative mr-2.5 p-2 rounded-[0.9rem] bg-[rgba(45,156,219,0.15)]">
          <img src={IconNotification} alt="Notification" />
          <span className="absolute -top-3 -right-1 bg-[#0E6D99] text-white text-xs px-1.5 rounded-full border border-white">3</span>
          </div>
        <div className="relative mr-5 p-2 rounded-[0.9rem] bg-[rgba(45,156,219,0.15)]">
          <img src={IconChat} alt="Chat" />
          <span className="absolute -top-3 -right-1 bg-[#0E6D99] text-white text-xs px-1.5 rounded-full border border-white">3</span>
          </div>
        <div className="flex justify-center items-center gap-2.5">
          <p className="text-xl">
            Hello, <span className="font-medium">Wasay</span>
          </p>

          <div className="relative inline-block" ref={logoutRef}>
            <button onClick={handleButtonClick} className="border-none bg-transparent cursor-pointer">
              <img src={Avatar} alt="Avatar" />
            </button>

            {showLogout && (
              <div className='absolute top-[50px] right-0 m-0 bg-white border border-gray-300 p-5 pt-5 rounded-md shadow-md z-10'>
                <ButtonWithIcon
                  icon={<IoIosLogOut />}
                  text='Logout'
                  onClick={() => alert('Logged out!')}
                  className='bg-[#d61125] rounded px-2.5 py-1.5 text-white cursor-pointer text-base font-bold hover:text-[#ff0019] transition-colors duration-300'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;