import React from "react";
import { FcVideoCall, FcCallback } from "react-icons/fc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

const TimeLine = ({ user }) => {
  return (
    <div className="w-[80%] bg-text relative overflow-y-scroll overflow-y-hidden">
      <div className="h-[4rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 sticky top-0">
        <div className="flex justify-between items-center">
          <img src={user.photoURL} alt="" className="h-[35px] rounded-[50%]" />

          <div className="flex items-center gap-4">
            <FcVideoCall className="text-2xl" />
            <FcCallback className="text-2xl" />
            <BiDotsVerticalRounded className="text-2xl text-white" />
          </div>
        </div>
      </div>

      <div className="">
        <div className="text px-4 py-8 flex flex-col gap-y-8">
          <Messages text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam,
          est rem aliquid asperiores numquam omnis exercitationem ipsam id minus!" />
          <Messages text="Okay i'll be right there" />
          <Messages text={"The quick brown fox jumped over the lazy dog"} />
          <Messages text={"It will be a fun event"} />
          <Messages text={"Project due tommorrow make sure its completed"} />
          <Messages text={"How many units dowe have next semester"} />
          <Messages text={"I've gotta hit the gym in the morning if i want to keep fit"} />
          <Messages text={"I usually have a coffee latte in the morning"} />
        </div>
      </div>
      <Input />
    </div>
  );
};

export default TimeLine;
