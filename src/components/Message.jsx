import React from 'react'
import Chats from './Chats/Chats'
import Profile from './Profile/Profile'
import Groups from './Groups/Groups'
import Contacts from './Contacts/Contacts'
import ProfSettings from './ProfSettings/ProfSettings'

const Message = ({active, user}) => {

  return (
    <div className='w-[40%] bg-[#32612D] rounded-r-lg p-8 h-screen overflow-hidden'>
        {active == 'chats'? (<Chats user={user}/>):""}
        {active == 'profile'? (<Profile user={user}/>):""}
        {active == 'groups'? (<Groups user={user}/>):""}
        {active == 'contacts'? (<Contacts />):""}
        {active == 'settings'? (<ProfSettings user={user}/>):""}
    </div>
  )
}
export default Message
