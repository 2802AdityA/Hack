import React, { useState } from 'react';
import '../../styles/components/SearchBar.css';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/userBlog/${searchText}`;
  };

  return (
    <div className="search-container mt-4">
        <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchText} placeHolder="@username" onChange={handleSearchInputChange} />
        <button type="submit" className='text-semibold' style={{backgroundColor:"#e3afbc",color:"black"}}>Search</button>
        </form>
    </div>
  );
}

export default SearchBar;
