import React from 'react'
import {BsSearch, BsPlus} from 'react-icons/bs'

const Groups = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <h1 className='text-3xl text-white font-semibold'>Groups</h1>
        <BsPlus className='text-2xl text-white'/>
      </div>

      <div className="flex items-center w-full border-none bg-gray-600 rounded-md p-2">
          <BsSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search for groups"
            className="border-none outline-none w-full text-gray-400 bg-transparent indent-4"
          />
        </div>
    </div>
  )
}

export default Groups
