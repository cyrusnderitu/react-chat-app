import React from "react";
import { RxAvatar } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = ({changeAcc}) => {
  return (
    <div className="">
      <div className="cont">
        <h4 className="text-gray-300 text-center font-semibold">Sign In</h4>
        <p className="text-gray-600 text-center mb-4">Sign in with connect to continue</p>
        <form className="text-gray-500 bg-[#8A9A5B] shadow-2xl p-8 w-full text-[16px] grid gap-6 mb-8">
          <div className="grid gap-1">
            <label htmlFor="Email">Username</label>
            <div className="flex items-center gap-2 bg-[#636f3f] p-2 rounded-md border-[1px] border-gray-400">
              <RxAvatar className="text-gray-300 w-[10%] border-r-2 border-r-gray-400"/>
              <input type="email" id="Email" placeholder="Enter Username/Email" className="w-full indent-2 bg-transparent outline-none"/>
            </div>
          </div>
          <div className="grid">
            <label htmlFor="pass">
              Password
            </label>
            <div className="flex items-center bg-[#636f3f] p-2 rounded-md border-[1px] border-gray-400">
              <RiLockPasswordFill className="fill-gray-300 w-[10%] border-r-2 border-r-gray-400"/>
              <input type="password" name="" id="pass" className="w-full indent-2 bg-transparent outline-none"/>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <a className="hover:underline hover:underline-offset-2">Forgot Password ?</a>

            <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" className="outline-none"/>
                <span> Remember Me</span>
            </div>
          </div>
          <button className="font-semibold text-gray-300 bg-blue-600 py-2 rounded-md">Sign In</button>
        </form>

        <p className="text-center">Don't have an Acount ? <span className="text-green-500 hover:cursor-pointer" onClick={()=>{changeAcc()}}>Signup now</span></p>
      </div>
    </div>
  );
};

export default Login;
