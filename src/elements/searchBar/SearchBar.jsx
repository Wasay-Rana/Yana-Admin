import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search here..." />
      <div className="search-icon">
        <FaSearch />
      </div>
    </div>
  );
}

export default SearchBar;
