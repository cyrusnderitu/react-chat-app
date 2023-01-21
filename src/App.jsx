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
    <div className="App">
      <div className='mx-20'>
        <NavBar />
        {!user ? <Welcome /> : <ChatBox />}
      </div>
    </div>
  );
}
export default App;