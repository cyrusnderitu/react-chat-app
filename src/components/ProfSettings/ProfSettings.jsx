import React, { useState } from "react";
import { BiDotsVerticalRounded, BiDownArrow } from "react-icons/bi";

const ProfSettings = ({ user }) => {

  const [active, setActive] = useState(null)
  const [current, setCurrent] = useState(false)

  return (
    <div>
      <div className="cont">
        <div className="relative h-[150px] bg-prof w-[calc(100% + 4rem)] -ml-8 -mr-8 -mt-8">
          <div className="px-8 py-4 flex justify-between items-center text-white">
            <h2 className="text-2xl">Settings</h2>
            <BiDotsVerticalRounded className="font-semibold text-xl cursor-pointer" />
          </div>
          <img
            src={user.photoURL}
            alt=""
            className="rounded-[50%] w-14 absolute -bottom-8 left-0 right-0 mx-auto"
          />
        </div>
        <div className="settData mt-32 grid gap-4">
          <div className="border-[1px] border-gray-500 rounded-md overflow-hidden">
            <div className="header hover:cursor-pointer" onClick={()=>{setActive("about"); if(active == "about"){setCurrent(!current)}}}>
              <h1 className="flex justify-between items-center text-gray-500 bg-[#363F1E] border-[1px] border-gray-400 rounded-md px-4 py-2 font-semibold">
                Personal Info
                <BiDownArrow className={`${active == "about" && current ? "rotate-180": ''} cursor-pointer`}/>
              </h1>
            </div>
            <p className={`${active == "about" && current ? "p-2": 'h-0'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              numquam. Doloribus, nobis.
            </p>
          </div>
          <div className="border-[1px] border-gray-500 rounded-md overflow-hidden">
            <div className="header hover:cursor-pointer" onClick={()=>{setActive("privacy"); if(active == "privacy"){setCurrent(!current)}}}>
              <h1 className="flex justify-between items-center text-gray-500 bg-[#363F1E] border-[1px] border-gray-400 rounded-md px-4 py-2 font-semibold">
                Privacy
                <BiDownArrow className={`${active == "privacy" && current ? "rotate-180": ''} cursor-pointer`}/>
              </h1>
            </div>
            <p className={`${active == "privacy" && current ? "p-2": 'h-0'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              numquam. Doloribus, nobis.
            </p>
          </div>
          <div className="border-[1px] border-gray-500 rounded-md overflow-hidden">
            <div className="header hover:cursor-pointer" onClick={()=>{setActive("help"); if(active == "help"){setCurrent(!current)}}}>
              <h1 className="flex justify-between items-center text-gray-500 bg-[#363F1E] border-[1px] border-gray-400 rounded-md px-4 py-2 font-semibold">
                Help
                <BiDownArrow className={`${active == "help" && current ? "rotate-180": ''} cursor-pointer`}/>
              </h1>
            </div>
            <p className={`${active == "help" && current ? "p-2": 'h-0'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              numquam. Doloribus, nobis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfSettings;
