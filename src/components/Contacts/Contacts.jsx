import React from 'react'
import {BsSearch, BsPlus} from 'react-icons/bs'

const Contacts = () => {
  return (
    <div>
      <div className="cont">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-bold text-2xl text-white ">Contacts</h1>
          <BsPlus className="text-white text-3xl hover:cursor-pointer p-[2px] rounded-sm hover:bg-lime-400"/>
        </div>
        <div className="flex items-center w-full border-none bg-gray-600 rounded-md p-2">
          <BsSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search for contact"
            className="border-none outline-none w-full text-gray-400 bg-transparent indent-4"
          />
        </div>
      </div>
    </div>
  )
}

export default Contacts
