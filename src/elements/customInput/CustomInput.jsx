import React from 'react';

const CustomInput = ({ id, name, placeholder, value, onChange, required, type = 'text' }) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2.5 bg-gray-200 border border-gray-300 rounded-md text-base box-border focus:outline-none focus:border-gray-400"
      />
    </div>
  );
};

export default CustomInput;