import React from 'react';

// Props interface for SearchBar component
const SearchBar: React.FC<{ setSearchTerm: React.Dispatch<React.SetStateAction<string>> }> = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      className="search-input" // CSS class for styling
      placeholder="Search products..." // Placeholder text for input field
      onChange={(e) => setSearchTerm(e.target.value)} // Update search term state on input change
    />  
  );
};

export default SearchBar;
