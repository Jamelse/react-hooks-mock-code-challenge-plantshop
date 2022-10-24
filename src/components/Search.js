import React from "react";

function Search({setSearch, currentSearch}) {
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input 
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {currentSearch}
        onChange={(e) => { 
          setSearch(e.target.value)
          console.log(currentSearch)}}
      />
    </div>
  );
}

export default Search;
