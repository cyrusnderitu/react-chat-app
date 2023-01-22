import React from 'react'
import NavBar from './NavBar'
import Message from './Message'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const ChatBox = () => {

  const [user, loading, error] = useAuthState(auth)

  return (
    <div className='h-full flex'>
      <NavBar />
      <Message />
    </div>
  )
}

export default ChatBox
