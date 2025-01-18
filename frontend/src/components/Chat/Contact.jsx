import React from 'react'
import Avatar from './Avatars'

const Contact = ({
  userId,
  username,
  selectedUserId, 
  setSelectedUserId,
  isOnline,
  avatarLink,
}) => {
  return (
    <li 
      key={userId}
      className={`${
        selectedUserId===userId?"bg-primary":""
      } capitalize py-2 lg:py-3 px-2 lg:px-5 rounded-[1.3rem] list-none text-white flex gap-3 items-center`
      }
      onClick={()=>{
        setSelectedUserId(userId);
        console.log(userId);
      }}
      >

        {<Avatar
         userId={userId}
         username={username}
         isOnline={isOnline}
         avatarLink={avatarLink}
        />}

        {<span className="text-xs lg:text-base text-center">{username}</span>}
          {isOnline&&(
            <span className="text-xs rounded-full bg-green-500 px-1 py-1"></span>
          )}
    </li>
  )
}

export default Contact