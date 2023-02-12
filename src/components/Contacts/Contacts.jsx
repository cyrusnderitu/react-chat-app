import React from 'react'
import { BsPlus } from 'react-icons/bs'
import Search from '../Search'

const Contacts = () => {
  return (
    <div>
      <div className="cont">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-bold text-2xl text-white ">Contacts</h1>
          <BsPlus className="text-white text-3xl hover:cursor-pointer p-[2px] rounded-sm hover:bg-lime-400"/>
        </div>
        <Search />
      </div>
    </div>
  )
}

export default Contacts
