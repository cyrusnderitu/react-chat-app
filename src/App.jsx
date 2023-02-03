import {useState, createContext} from 'react'
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import './App.css'
import { UserContext } from './userContext';

function App() {

  const [user, loading] = useAuthState(auth);

  return (
    <div className="App font-popps">
      <UserContext.Provider value={user} >
        <div className='bg-[#708238] h-screen overflow-y-scroll'>
          {!user ? <Welcome /> : <ChatBox />}
        </div>
      </UserContext.Provider>
    </div>
  );
}
export default App;