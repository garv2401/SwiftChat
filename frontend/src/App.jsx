import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ChatHome from "./pages/ChatHome";
import VerifyEmail from "./pages/VerifyEmail";
import ChatWithAI from "./components/Chat/ChatWithAI";
import axios from "axios";
import { AuthProvider, useAuth } from "./contexts/authContext";
import { ProfileProvider } from "./contexts/profileContext";
import Profile from "./components/Profile";
import { useEffect } from "react";
import { baseURL } from "../apiConfig";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const { isAuthenticated, checkAuth } = useAuth();
  useEffect(() => {
    checkAuth();
  }, [isAuthenticated]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([{
  path: "/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"register",
      element:<Register/>
    },
    {
      path:"users/:id/verify/:token",
      element:<VerifyEmail/>
    },
    {
      path:"profile",
      element:<Profile/>
    },
    {
      path:"chatHome",
      element:<ChatHome/>
    }

  ]
}]);

const App = () => {
  axios.defaults.baseURL=baseURL;
  axios.defaults.withCredentials=true;

  return (
    <>
      <AuthProvider>
        <ProfileProvider>
          <RouterProvider router={router}/>
          <Toaster/>
        </ProfileProvider>
      </AuthProvider>
    </>
  );
};

export default App;
