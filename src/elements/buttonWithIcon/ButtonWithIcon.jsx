import React from 'react';
import './buttonWithIcon.css'; // Assuming this file is for general styling

const ButtonWithIcon = ({ icon, text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`button-with-icon ${className}`}>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </button>
  );
};

export default ButtonWithIcon;
