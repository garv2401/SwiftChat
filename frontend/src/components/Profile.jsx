import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Nav from "./Chat/Nav"
import {useProfile} from "../contexts/profileContext"
import SelectAvatar from "./SelectAvatar"
import {toast} from 'react-hot-toast'

const Profile = () => {
  const {userDetails}=useProfile();
  const [formData,setFormData]=useState({});
  const [selectedLink,setSelectedLink]=useState("");
  //console.log(selectedLink);
  //console.log(formData)

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value,avatarLink:selectedLink})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.put("/api/user/profile/update",{...formData,avatarLink:selectedLink})
      //console.log("Recieved Data:",res);
      //toast.success("Profile Updated");
      toast.success(res.data.message);
      

    }catch(error){
      console.error(error);
      //toast.error("Error Occurred");
      toast.error(error.response.data.message);

    }
  }


  useEffect(() => {
    setFormData(userDetails)
  }, [userDetails])
  

  return (
    <div className=" flex h-full min-h-screen bg-background">
      <Nav/>
      <div className="bg-background p-3 md:p-0 w-[91%] flex items-center ">
        <div className="max-w-xl mx-auto">
          <h2 className="text-center md:text-left mb-4 text-2xl font-bold text-white">Update Profile</h2>

          <form action="" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 ">
              <div className="w-full">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-white">
                  First Name
                </label>

                <input 
                type="text" 
                id='firstName'
                name='firstName'
                value={formData?.firstName}
                placeholder='First Name'
                onChange={handleChange}
                required
                className="border-2 border-slate-600 text-sm rounded-lg focus:ring-gray-700 bg-primary text-white p-3" />
              </div>

              <div className="w-full">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white">
                  Last Name
                </label>

                <input 
                type="text" 
                id='lastName'
                name='lastName'
                value={formData?.lastName}
                placeholder='Last Name'
                onChange={handleChange}
                required
                className="border-2 border-slate-600 text-sm rounded-lg focus:ring-gray-700 bg-primary text-white p-3" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Email
                </label>

                <input 
                type="text" 
                id='email'
                name='email'
                value={userDetails?.email} 
                placeholder='Email'
                onChange={handleChange}
                required
                className="border-2 border-slate-600 text-sm rounded-lg focus:ring-gray-700 w-full bg-primary text-gray-400 p-3" />
              </div>
            </div>

            <SelectAvatar
            setSelectedLink={setSelectedLink}
            selectedLink={selectedLink}
            />

            <div className="flex items-center space-x-4">
              <button type='submit' className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                Update Profile
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile