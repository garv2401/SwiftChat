import React,{createContext,useState,useContext} from "react";
import Cookies from "js-cookie"
import axios from "axios"

const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const setAuthenticated=(value)=>{
        setIsAuthenticated(value);
    }

    const checkAuth=()=>{
        // const token=Cookies.get("authToken");
        // const localToken = localStorage.getItem('authToken');
        const checkAuthToken=async()=>{
            try{
                const res=await axios.get('api/user/checkToken');

                if(res.status==200 || res.status==201){
                    setIsAuthenticated(true);
                    console.log(res.data.message);
                    console.log(isAuthenticated);
                }else{
                    setIsAuthenticated(false);
                    console.log(res.data.message);
                }

            }catch(error){
                setIsAuthenticated(false);
                console.log(error.res.data.message);
                console.log(isAuthenticated);
                console.log("Error fetching checkToken",error);

            }

        }
        checkAuthToken();
        //console.log("token:",token);
        // if(token || localToken){
        //     setIsAuthenticated(true);
        //     console.log("Token Exists");
        //     console.log(isAuthenticated);
        // }
        // else{
        //     setIsAuthenticated(false);
        //     console.log("Token Does'nt Exists");
        //     console.log(isAuthenticated);

        // }
    }

    const logout=()=>{
        //Cookies.remove("authToken");
        const removeToken=async()=>{
            const res=await axios.get("api/user/removeToken");
            if(res.status==200 || res.status==201){
                setIsAuthenticated(false);
                console.log("Logged out");
            }
        }
        removeToken();
    }

    return(
        <AuthContext.Provider value={{isAuthenticated,logout,checkAuth,setAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth=()=>{
    return useContext(AuthContext);
}

