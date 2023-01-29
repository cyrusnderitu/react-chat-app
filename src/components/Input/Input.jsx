import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Input = () => {
  return (
    <div className='sticky bottom-0 w-full'>
      <div className="cont flex items-center justify-between bg-slate-200 h-14 px-4 py-8 rounded-t-xl">
        <form className='w-[calc(100%-150px)]'>
            <input type="text" name="" id="" placeholder='Type something ...' className='border-b-2 border-gray-300 indent-8 text-gray-300 w-full bg-transparent'/>
        </form>
        <div className=''>
            <button className='flex gap-2 border-none text-sm bg-sky-400 text-white p-2 rounded-lg items-center hover:cursor-pointer'>Send <AiOutlineArrowRight className='text-xl' /></button>
        </div>
      </div>
    </div>
  )
}

export default Input
