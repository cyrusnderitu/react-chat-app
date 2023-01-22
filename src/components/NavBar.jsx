import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {FcGoogle} from 'react-icons/fc'

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth)

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider); 
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <nav className="flex justify-between items-center h-14 bg-slate-500 text-white px-8">
      <h1 className="font-semibold text-2xl">React Chat</h1>
      {user ? (
        <button onClick={signOut} type="button" className="flex items-center gap-2">
          <FcGoogle />
          Sign Out
        </button>
      ) : (
        <button onClick={googleSignIn} className="flex items-center gap-2 bg-cyan-500 px-2 rounded-md font-semibold">
          <FcGoogle className="bg-white"/>
          Sign In
        </button>
      )}
    </nav>
  );
};
export default NavBar;