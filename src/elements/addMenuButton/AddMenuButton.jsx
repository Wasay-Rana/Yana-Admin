import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import addMenuIllustration from '../../assets/addMenuIllustration.png';

const AddMenuButton = ({ isCollapsed, onClick }) => {
  return (
    <div style={{ backgroundColor: '#d61125' }}
      className={`flex items-center bg-main p-4 ${isCollapsed
        ? 'justify-center rounded-lg w-10 h-10 m-auto text-white '
        : 'justify-between p-3 rounded-lg shadow-md w-44'
        } transition-all duration-100`}
    >
      {!isCollapsed ? (
        <div className="flex flex-col">
          <p style={{ color: 'white', textAlign: 'left' }}
            className="text-white font-light text-xs text-left">
            Please organize your menus through button below!
          </p>
          <button
            style={{ backgroundColor: '#f2f5f3' }}
            className="bg-[#f2f5f3] text-[#464255] text-[10px] font-light px-2 py-2 rounded-lg mt-2 transition-transform duration-100 hover:scale-105 hover:bg-white"
            onClick={onClick}
          >
            + Add Menus
          </button>
        </div>
      ) : (
        <button
          className="bg-yana-red border-none cursor-pointer flex items-center justify-center"
          onClick={onClick}
        >
          <FiPlusCircle  style={{color:"white", fontSize: '16px'}} className="text-white text-2xl" />
        </button>
      )}
      {!isCollapsed && (
        <img
          src={addMenuIllustration}
          className="w-full max-w-[40px] h-auto"
          alt="Add Menu Illustration"
        />
      )}
    </div>
  );
};

export default AddMenuButton;
