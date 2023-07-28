import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Search Transactions</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by description"
      />
      <button onClick={() => handleSearch(searchTerm)}>Search</button>
    </div>
  );
};

export default SearchBar;
