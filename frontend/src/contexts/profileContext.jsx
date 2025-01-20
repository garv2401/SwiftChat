import React,{useState,useContext,createContext,useEffect} from "react"
import { useAuth } from "./authContext"
import axios from "axios"

const ProfileContext=createContext();
 
export const ProfileProvider=({children})=>{
    const {isAuthenticated}=useAuth();
    const [userDetails,setUserDetails]=useState(null);

    useEffect(()=>{
        const fetchUserDetails=async()=>{
            try{
                const res=await axios.get("/api/user/profile",{ 
                    withCredentials:true
                  });
                setUserDetails(res.data);
    
            }
            catch(err){
                console.log("Error fetching details",err);
            }
        }

        fetchUserDetails();
    },[isAuthenticated]);

    return(
        <ProfileContext.Provider value={{userDetails,setUserDetails,isAuthenticated}}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile=()=>{
    return useContext(ProfileContext);
}

