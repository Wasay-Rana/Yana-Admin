import React from 'react';
import './addMenuButton.css';
import addMenuIllustration from '../../assets/addMenuIllustration.png';

const AddMenuButton = ({ isCollapsed, onClick }) => {
  return (
    <div className={`red-card ${isCollapsed ? 'collapsed' : ''}`}>
      {!isCollapsed && (
        <div className='text-illustration'>
          <p>Please organize your menus through button below!</p>
          <button className='btn' onClick={onClick}>
            + Add Menus
          </button>
        </div>
      )}
      <img src={addMenuIllustration} className={`illustration ${isCollapsed ? 'small' : ''}`} />
    </div>
  );
}

export default AddMenuButton;
