// import React from 'react'
// import Avatar from './Chat/Avatars'
// import { useState,useEffect } from 'react'
// import axios from 'axios'

// const SelectAvatar = ({
//   setSelectedLink,
//   selectedLink,
// }) => {

//   const [avatars,setAvatars]=useState([]);

//   useEffect(() => {
//     const fetchAllAvatars=async()=>{
//       try{
//         const res=await axios.get('/api/avatar/all');
//         //console.log(res.data.avatars);
//         setAvatars(res.data.avatars);
//       }catch(error){
//         console.error("Error fetching avatars:",error);
//       }
//     }
//     fetchAllAvatars();
//   },[])

//   //const isBelowMd = useMediaQuery({ query: "(max-width: 768px)" }); // Adjust breakpoint as needed

//   // const style = {
//   //   width: "90px",
//   //   height: isBelowMd?"70px":"90px",
//   //   margin: "5px",
//   // };
  
//   return (
//     <div className="mt-3">
//       <p className="block mb-2 text-lg font-medium text-white">
//         Choose Avatar
//       </p>
//       <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mb-7">
//         {avatars.map((avatar)=>(
//           <img
//           key={avatar._id}
//           src={avatar.link}
//           onClick={()=>setSelectedLink(avatar.link)}
//             alt={`Avatar ${avatar._id}`}
//             style={{width:"90px",height:"90px",margin:"5px"}}
//              className={`rounded-full cursor-pointer p-2 bg-primarySecond ${selectedLink===avatar.link?"outline":""} outline-white`}/>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default SelectAvatar

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SelectAvatar.css';  // Import the CSS file

const SelectAvatar = ({
  setSelectedLink,
  selectedLink,
}) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAllAvatars = async () => {
      try {
        const res = await axios.get('/api/avatar/all');
        setAvatars(res.data.avatars);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    };
    fetchAllAvatars();
  }, []);

  return (
    <div className="select-avatar-container">
      <p className="select-avatar-title">
        Choose Avatar
      </p>
      <div className="avatar-grid">
        {avatars.map((avatar) => (
          <img
            key={avatar._id}
            src={avatar.link}
            alt={`Avatar ${avatar._id}`}
            className={`avatar-img ${selectedLink === avatar.link ? 'selected-avatar' : ''}`}
            onClick={() => setSelectedLink(avatar.link)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectAvatar;
