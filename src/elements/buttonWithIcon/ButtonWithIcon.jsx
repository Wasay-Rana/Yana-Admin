import React from 'react';

const ButtonWithIcon = ({ icon, text, onClick, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center justify-center w-44 px-2 py-2 border-none rounded-full cursor-pointer font-medium gap-2 ${className}`}
    >
      <span className="text-base flex items-center">{icon}</span>
      <span className="text-base">{text}</span>
    </button>
  );
};

export default ButtonWithIcon;