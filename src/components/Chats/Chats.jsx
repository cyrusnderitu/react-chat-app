import React from "react";
import {BsSearch} from 'react-icons/bs'

const Chats = () => {
  return (
    <div>
      <div className="cont">
        <h1 className="font-bold text-2xl text-white mb-8">Chats</h1>
        <div className="flex items-center w-full border-none bg-gray-600 rounded-md p-2">
          <BsSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search messages or users"
            className="border-none outline-none w-full text-gray-400 bg-transparent indent-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Chats;
