import React from "react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = ({changeAcc}) => {
  return (
    <div>
      <div className="cont">
        <h4 className="text-gray-300 text-center font-semibold text-xl">Register</h4>
        <p className="text-gray-600 text-center mb-4 text-md">
          Register for an Account with Connect
        </p>
        <form className="text-gray-600 bg-[#8A9A5B] shadow-2xl p-8 w-full text-[16px] grid gap-6 mb-8 font-semibold outline-none">
          <div className="grid gap-1">
            <label htmlFor="Mail">Email</label>
            <div className="flex items-center gap-2 bg-[#636f3f] p-2 rounded-md border-[1px] border-gray-400">
              <AiOutlineMail className="text-gray-300 w-[10%] border-r-2 border-r-gray-400" />
              <input
                type="email"
                id="Email"
                placeholder="example@email.com"
                className="w-full indent-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="grid gap-1">
            <label htmlFor="Email">Username</label>
            <div className="flex items-center gap-2 bg-[#636f3f] p-2 rounded-md border-[1px] border-gray-400">
              <RxAvatar className="text-gray-300 w-[10%] border-r-2 border-r-gray-400" />
              <input
                type="email"
                id="Email"
                placeholder="Enter Username"
                className="w-full indent-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="grid">
            <label htmlFor="pass">Password</label>
            <div className="flex items-center bg-[#636f3f] p-2 rounded-md border-[1px] border-gray-400">
              <RiLockPasswordFill className="fill-gray-300 w-[10%] border-r-2 border-r-gray-400" />
              <input
                type="password"
                name=""
                id="pass"
                className="w-full indent-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="grid">
            <label htmlFor="passwrd">Confirm Password</label>
            <div className="flex items-center bg-[#636f3f] p-2 rounded-md border-[1px] border-gray-400">
              <RiLockPasswordFill className="fill-gray-300 w-[10%] border-r-2 border-r-gray-400" />
              <input
                type="password"
                name=""
                id="passwrd"
                className="w-full indent-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <button className="font-semibold text-gray-300 bg-blue-600 py-2 rounded-md">
            Sign Up
          </button>
          <div className="flex gap-2 items-start">
            <input type="checkbox" name="" id="" required/>
            <p className="-mt-1"> By Registering you agree to <span className="text-green-500 hover:cursor-pointer">Terms of Use</span></p>
          </div>
        </form>
        <p className="text-center">Already have an existin account ? <span className="text-green-500 hover:cursor-pointer" onClick={()=>{changeAcc()}}>Signin</span></p>
      </div>
    </div>
  );
};

export default Register;
