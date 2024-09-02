import React from 'react';
import './addMenuButton.css';
import { FiPlusCircle } from "react-icons/fi";
import addMenuIllustration from '../../assets/addMenuIllustration.png';

const AddMenuButton = ({ isCollapsed, onClick }) => {
  return (
    <div className={`red-card ${isCollapsed ? 'collapsed' : ''}`}>
      {!isCollapsed ? (
        <div className='text-illustration'>
          <p>Please organize your menus through button below!</p>
          <button className='btn' onClick={onClick}>
            + Add Menus
          </button>
        </div>
      ) : (
        <button className='icon-btn' onClick={onClick}>
          <FiPlusCircle /> 
        </button>
      )}
      <img src={addMenuIllustration} className={`illustration ${isCollapsed ? 'small' : ''}`} alt="Add Menu Illustration" />
    </div>
  );
}

export default AddMenuButton;
