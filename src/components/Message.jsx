import React from 'react'
import Chats from './Chats/Chats'
import Profile from './Profile/Profile'
import Groups from './Groups/Groups'
import Contacts from './Contacts/Contacts'
import ProfSettings from './ProfSettings/ProfSettings'

const Message = ({active, user}) => {

  return (
    <div className='w-[30%] bg-[#32612D] rounded-r-lg p-8'>
      {active == 'chats'? (<Chats />):""}
      {active == 'profile'? (<Profile user={user}/>):""}
      {active == 'groups'? (<Groups />):""}
      {active == 'contacts'? (<Contacts />):""}
      {active == 'settings'? (<ProfSettings user={user}/>):""}
    </div>
  )
}

export default Message
