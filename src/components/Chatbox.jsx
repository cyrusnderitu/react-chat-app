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
    <div className='h-full flex'>
      <NavBar active={active} handleChange={handleChange}/>
      <Message active={active} user={user}/>
      <TimeLine />
    </div>
  )
}
export default ChatBox
