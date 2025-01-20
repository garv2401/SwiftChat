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
        const token=Cookies.get("authToken");
        const localToken = localStorage.getItem('authToken');
        console.log("token:",token);
        if(token || localToken){
            setIsAuthenticated(true);
            console.log("Token Exists");
            console.log(isAuthenticated);
        }
        else{
            setIsAuthenticated(false);
            console.log("Token Does'nt Exists");
            console.log(isAuthenticated);

        }
    }

    const logout=()=>{
        Cookies.remove("authToken");
        setAuthenticated(false);
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

