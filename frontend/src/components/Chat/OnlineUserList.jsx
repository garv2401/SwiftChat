import React from "react";
import { useEffect, useState } from "react";
import Avatar from "./Avatars";
import Contact from "./Contact";

const OnlineUserList = ({
  onlinePeople,
  selectedUserId,
  setSelectedUserId,
  offlinePeople,
  isMobile
}) => {

  const [searchTerm, setSearchTerm] = useState("");

  const filterOnlinePeople = Object.keys(onlinePeople).filter((userId) => {
    const username = onlinePeople[userId].username || "";
    return username.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const filterOfflinePeople = Object.keys(offlinePeople).filter((userId) => {
    const { firstName, lastName } = offlinePeople[userId];
    const fullName = `${firstName} ${lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //console.log(filterOnlinePeople,filterOfflinePeople);

  return (
    <>
    {
    !isMobile && <section className="w-full md:w-[29%] py-3 border-r-2 px-2 lg:px-4 bg-dark border-zinc-700">
      <div className="text-white flex items-center gap-2 p-1 py-3 px-3 bg-primary mb-8 rounded-2xl mx-4">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="#ffffff"
            fill-rule="evenodd"
            d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
          />
        </svg>
        <input
          type="text"
          className="w-full bg-transparent outline-none"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={()=>{setSelectedUserId("AIChat")}}className="w-7 h-7">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)"/><defs><radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"><stop offset=".067" stop-color="#9168C0"/><stop offset=".343" stop-color="#5684D1"/><stop offset=".672" stop-color="#1BA1E3"/></radialGradient></defs></svg>
        </button>
        
      </div>

      <div className="max-h-[85vh] overflow-auto no-scrollbar">
        
        {filterOnlinePeople.map((userId) => {
          const { username, avatarLink } = onlinePeople[userId];
          console.log(userId,username);
          return (
            <Contact
              key={userId}
              userId={userId}
              username={username}
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              isOnline={true}
              avatarLink={avatarLink}
            />
          );
        })}

        {filterOfflinePeople.map((userId) => {
          const { _id, firstName, lastName, avatarLink } =
            offlinePeople[userId];
          console.log(userId,avatarLink);
          return (
            <Contact
              key={_id}
              userId={_id}
              username={`${firstName} ${lastName}`}
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              isOnline={false}
              avatarLink={avatarLink}
            />
          );
        })}
      </div>
    </section>
    }

    {isMobile && !selectedUserId &&
      <section className="w-full md:w-[29%] py-3 border-r-2 px-2 lg:px-4 bg-dark border-zinc-700">
      <div className="text-white flex items-center gap-2 p-1 py-3 px-3 bg-primary mb-8 rounded-2xl mx-4">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="#ffffff"
            fill-rule="evenodd"
            d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
          />
        </svg>
        <input
          type="text"
          className="w-full bg-transparent outline-none"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={()=>setSelectedUserId("AIChat")}className="w-7 h-7">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)"/><defs><radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"><stop offset=".067" stop-color="#9168C0"/><stop offset=".343" stop-color="#5684D1"/><stop offset=".672" stop-color="#1BA1E3"/></radialGradient></defs></svg>
        </button>
      </div>

      <div className="max-h-[85vh] overflow-auto no-scrollbar">
        {filterOnlinePeople.map((userId) => {
          const { username, avatarLink } = onlinePeople[userId];
          console.log(userId,username);
          
          return (
            <Contact
              key={userId}
              userId={userId}
              username={username}
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              isOnline={true}
              avatarLink={avatarLink}
            />
          );
        })}

        {filterOfflinePeople.map((userId) => {
          const { _id, firstName, lastName, avatarLink } =
            offlinePeople[userId];
          //console.log(userId,avatarLink);
          return (
            <Contact
              key={_id}
              userId={_id}
              username={`${firstName} ${lastName}`}
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              isOnline={false}
              avatarLink={avatarLink}
            />
          );
        })}
      </div>
    </section>

    }

    </>
  );
};

export default OnlineUserList;
