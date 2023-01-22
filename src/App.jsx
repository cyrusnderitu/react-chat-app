import {useState} from 'react'
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import './App.css'

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App font-popps">
      <div className='bg-[#708238] h-screen overflow-y-scroll'>
        {!user ? <Welcome /> : <ChatBox />}
      </div>
    </div>
  );
}
export default App;