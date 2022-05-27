import React from "react";

function Search({onSearchChange}) {
    return (
      <div className="p-2 flex justify-center md:justify-end mb-0.5">
        <input className="w-96 p-2 rounded-lg bg-primaryYellow  md:w-52 md:mr-14"
          type='search'
          placeholder='Search Robros'
          onChange={onSearchChange}
        />
      </div>
    )
}

export default Search;