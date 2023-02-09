import {useState, createContext} from 'react'
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import './App.css'
import { UserContext } from './userContext';
import Loading from './components/Loading';

function App() {

  const [user, loading] = useAuthState(auth);

  const CurrentUser = () => {
    if (loading) {
      console.log("the page is loading.......")
      return (
        <Loading />
      );
    }
    if (!user) {
      console.log("the user is not found =( ......")
      return (
        <Welcome />
      );
    }
    if (user) {
      console.log("the user has been found =) ......")
      return (
        <ChatBox />
      );
    }
  };

  return (
    <div className="App font-popps">
      <UserContext.Provider value={user} >
        <div className='bg-[#708238] h-screen overflow-y-scroll'>
          <CurrentUser />
          {/* {CurrentUser} */}
        </div>
      </UserContext.Provider>
    </div>
  );
}
export default App;