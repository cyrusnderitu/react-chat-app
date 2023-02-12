import React from "react";
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <div>
      <div className="flex items-center w-full border-none bg-gray-600 rounded-md p-2">
        <BsSearch className="text-xl" />
        <input
          type="text"
          placeholder="Search users"
          className="border-none outline-none w-full text-gray-400 bg-transparent indent-4"
        />
      </div>
    </div>
  );
};

export default Search;
