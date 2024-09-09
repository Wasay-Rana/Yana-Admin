import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="relative flex items-center mr-1">
      <input 
        type="text" 
        placeholder="Search here..." 
        className="w-full py-2 pr-10 pl-3 rounded-md border border-transparent outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-500"
      />
      <div className="absolute right-2 flex items-center pointer-events-none">
        <FaSearch />
      </div>
    </div>
  );
}

export default SearchBar;