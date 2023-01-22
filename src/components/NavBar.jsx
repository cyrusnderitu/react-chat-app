import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/comments.png";
import { RxAvatar } from "react-icons/rx";
import { BsChatSquareDotsFill } from "react-icons/bs";
import {BiGroup} from 'react-icons/bi'
import {AiFillSetting} from 'react-icons/ai'

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <nav className="flex justify-between flex-col items-center h-full w-[5%] bg-slate-500 text-white py-8">
      <div className="flex flex-col items-center">
        <img src={Logo} alt="" className="w-[30px] mb-8" />
        <div className="nav_menu grid gap-6">
          <a><RxAvatar  className="text-3xl"/></a>
          <a><BsChatSquareDotsFill  className="text-3xl"/></a>
          <a><BiGroup  className="text-3xl"/></a>
          <a><AiFillSetting  className="text-3xl"/></a>
        </div>
      </div>
      
      <div>

        <a>
          <img src={user.photoURL} alt="" className="h-[30px] rounded-[50%]" />
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
