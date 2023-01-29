import React, {useState} from 'react'
import NavBar from './NavBar'
import Message from './Message'
import TimeLine from './TimeLine/TimeLine'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const ChatBox = () => {

  const [user, loading, error] = useAuthState(auth)
  const [active, setActive] = useState("chats")

  const handleChange = (change)=>{
    setActive(change)
  }

  return (
    <div className='flex h-screen'>
      <NavBar active={active} handleChange={handleChange}/>
      <Message active={active} user={user}/>
      <TimeLine user={user}/>
    </div>
  )
}
export default ChatBox
