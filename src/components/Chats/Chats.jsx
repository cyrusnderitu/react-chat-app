import React, {useContext} from "react";
import {BsSearch, BsPlus} from 'react-icons/bs'
import { UserContext } from "../../userContext";

const Chats = () => {

  const f =Intl.DateTimeFormat("en-us", {
    dateStyle: 'short'
  })

  const user = useContext(UserContext);
  console.log("The users in chat is : ", user)
  return (
    <div className="h-full">
      <div className="cont h-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-bold text-2xl text-white ">Chats</h1>
          <BsPlus className="text-white text-3xl hover:cursor-pointer p-[2px] rounded-sm hover:bg-lime-400"/>
        </div>
        <div className="flex items-center w-full border-none bg-gray-600 rounded-md p-2">
          <BsSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search messages or users"
            className="border-none outline-none w-full text-gray-400 bg-transparent indent-4"
          />
        </div>
        {/* <h1 className="text-2xl text-white my-8">Recent</h1>
        <div className="flex gap-2 justify-between">
          <div className="bg-slate-400 rounded-lg p-2 flex flex-col items-center">
            <img src={user.photoURL} alt="" className="h-10 rounded-[50%] mb-2" />
            <h4 className="text-white">{user.displayName}</h4>
          </div>
          <div className="bg-slate-400 rounded-lg p-2 flex flex-col items-center">
            <img src={user.photoURL} alt="" className="h-10 rounded-[50%] mb-2" />
            <h4 className="text-white">{user.displayName}</h4>
          </div>
          <div className="bg-slate-400 rounded-lg p-2 flex flex-col items-center">
            <img src={user.photoURL} alt="" className="h-10 rounded-[50%] mb-2" />
            <h4 className="text-white">{user.displayName}</h4>
          </div>
        </div> */}
        <div className="h-full">
          <h1 className="text-2xl text-white my-8">Messages</h1>
          <div className="overflow-y-scroll h-[calc(100%-200px)] w-[calc(100%+32px)] -mr-8 chats">
            <div className="cont gap-4 flex flex-col justify-between">
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <img src={user.photoURL} alt="" className="h-[30px] bg-white rounded-[50%]"/>
                  <div>
                    <h1 className="text-xl text-white font-semibold">{user.displayName}</h1>
                    <p className="text-gray-400">Okay sure</p>
                  </div>
                </div>
                <span>{f.format()}</span>
              </div>
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <img src={user.photoURL} alt="" className="h-[30px] bg-white rounded-[50%]"/>
                  <div>
                    <h1 className="text-xl text-white font-semibold">{user.displayName}</h1>
                    <p className="text-gray-400">Hello world</p>
                  </div>
                </div>
                <span>{f.format()}</span>
              </div>
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <img src={user.photoURL} alt="" className="h-[30px] bg-white rounded-[50%]"/>
                  <div>
                    <h1 className="text-xl text-white font-semibold">{user.displayName}</h1>
                    <p className="text-gray-400">I'll meet you there =)</p>
                  </div>
                </div>
                <span>{f.format()}</span>
              </div>
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <img src={user.photoURL} alt="" className="h-[30px] bg-white rounded-[50%]"/>
                  <div>
                    <h1 className="text-xl text-white font-semibold">{user.displayName}</h1>
                    <p className="text-gray-400"> Text me when you arrive</p>
                  </div>
                </div>
                <span>{f.format()}</span>
              </div>
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <img src={user.photoURL} alt="" className="h-[30px] bg-white rounded-[50%]"/>
                  <div>
                    <h1 className="text-xl text-white font-semibold">{user.displayName}</h1>
                    <p className="text-gray-400">Postpone to next week</p>
                  </div>
                </div>
                <span>{f.format()}</span>
              </div>
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <img src={user.photoURL} alt="" className="h-[30px] bg-white rounded-[50%]"/>
                  <div>
                    <h1 className="text-xl text-white font-semibold">{user.displayName}</h1>
                    <p className="text-gray-400">Bye bye</p>
                  </div>
                </div>
                <span>{f.format()}</span>
              </div>
              <div className="flex justify-between items-start hover:bg-slate-600 py-4 px-2 rounded-lg mr-6 hover:cursor-pointer">
                <div className="flex items-center gap-x-2">
                  <img src={user.photoURL} alt="" className="h-[30px] bg-white rounded-[50%]"/>
                  <div>
                    <h1 className="text-xl text-white font-semibold">{user.displayName}</h1>
                    <p className="text-gray-400"> Clearance needed</p>
                  </div>
                </div>
                <span>{f.format()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
