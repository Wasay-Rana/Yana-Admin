// src/components/CustomInput.jsx
import React from 'react';
import './CustomInput.css'; 

const CustomInput = ({ id, name, placeholder, value, onChange, required, type = 'text' }) => {
  return (
    <div className="custom-input-group">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="custom-input"
      />
    </div>
  );
};

export default CustomInput;
