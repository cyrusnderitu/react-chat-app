import React from 'react'
import Chats from './Chats/Chats'
import Profile from './Profile/Profile'
import Groups from './Groups/Groups'
import Contacts from './Contacts/Contacts'
import ProfSettings from './ProfSettings/ProfSettings'

const Message = ({active}) => {


  console.log(active)
  return (
    <div className='w-[30%] bg-[#32612D] rounded-r-lg p-8'>
      {active == 'chats'? (<Chats />):""}
      {active == 'profile'? (<Profile />):""}
      {active == 'groups'? (<Groups />):""}
      {active == 'contacts'? (<Contacts />):""}
      {active == 'settings'? (<ProfSettings />):""}
    </div>
  )
}

export default Message
