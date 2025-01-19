import React from "react";
import { useAuth } from "../contexts/authContext";
import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { baseURL } from '../../apiConfig';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {isAuthenticated,setAuthenticated}=useAuth();
    const [showPass,setShowPass]=useState(false);
    const navigate=useNavigate();
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    toast.success("Please Wait");
    e.preventDefault();
    try {
      const url = "/api/user/register";
      const { data: res } = await axios.post(url, data);
      //console.log(res.message);
      toast.success(res.message);
      
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 300 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  };
  const handleLoginSuccess = async (credentialResponse) => {
      const idToken = credentialResponse.credential;
      //console.log("ID Token:", idToken);
    
      try {
        const response = await fetch(`${baseURL}/api/user/auth/google`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idToken: idToken }),
          credentials: "include",
        });
    
        const data = await response.json();
    
        if (response.ok) {
          console.log('Backend response:', data);
          // Handle successful login
          setAuthenticated(true); // User is now authenticated
          //localStorage.setItem('token', data.token); // Store the token if needed
          toast.success('Registration successful');

        } else {
          console.error('Registration failed:', data.message);
          toast.error(data.message || 'Registration failed');
        }
      } catch (err) {
        console.error('Error with backend verification:', err);
        toast.error('Something went wrong. Please try again.');
      }
    };
    
  
    const handleLoginError = () => {
      console.log('Login Failed');
    };

    useEffect(()=>{
      if(isAuthenticated){
        navigate('/');

      }
    },[isAuthenticated]);

  return (
    <section className="bg-dark min-h-screen">
      <div className="flex flex-col items-center justify-center md:w-1/3 w-5/6 h-screen mx-auto my-auto">
        <div className="border-2 border-gray-800 focus:ring-4 w-full rounded-lg shadow bg-background">
          <div className="p-4 md:p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white">
              Create an account
            </h1>
            <form
              action="#"
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  value={data.email}
                  name="email"
                  id="email"
                  className="sm:text-sm rounded-lg block p-1 w-full bg-primary px-2 py-3 text-white border-2 border-gray-800 "
                  placeholder="name@company.com"
                  required=""
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                    placeholder="your name"
                    required=""
                    className="sm:text-sm rounded-lg block w-full bg-primary px-2 py-3 text-white border-2 border-gray-800"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                    placeholder="your surname"
                    required=""
                    className="sm:text-sm rounded-lg block w-full bg-primary px-2 py-3 text-white border-2 border-gray-800"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <div className="flex flex-row gap-1 items-center">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="*******"
                    required=""
                    className={`sm:text-sm w-full rounded-lg bg-primary px-2 py-3 text-white border-2 border-gray-800 `}
                  />

                  <div
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                  >
                    {!showPass ? (
                      <svg
                        height="28"
                        viewBox="0 0 48 48"
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m0 0h48v48h-48z" fill="none" />
                        <path
                          d="m45.3 22.1c-2.1-2.6-9.9-11.1-21.3-11.1a23.4 23.4 0 0 0 -3.8.3l3.6 3.7h.2c8.8 0 15.3 6.2 17.7 9a33.7 33.7 0 0 1 -4.6 4.3l2.8 2.8a30.1 30.1 0 0 0 5.4-5.2 3 3 0 0 0 0-3.8z"
                          fill="#ffffff"
                        />
                        <path
                          d="m29.4 26.6a5.8 5.8 0 0 0 .6-2.6 6 6 0 0 0 -6-6 5.8 5.8 0 0 0 -2.6.6l-11.7-11.7a2 2 0 0 0 -2.8 2.8l4.7 4.8a32.1 32.1 0 0 0 -8.9 7.6 3 3 0 0 0 0 3.8c2.1 2.6 9.9 11.1 21.3 11.1a23 23 0 0 0 8.5-1.6l5.8 5.7a2 2 0 1 0 2.8-2.8zm-5.4 6.4c-8.8 0-15.3-6.2-17.7-9a29.7 29.7 0 0 1 8.3-6.6l4 4a5.8 5.8 0 0 0 -.6 2.6 6 6 0 0 0 6 6 5.8 5.8 0 0 0 2.6-.6l2.8 2.8a19.1 19.1 0 0 1 -5.4.8z"
                          fill="#ffffff"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                          fill="#ffffff"
                        />
                        <path
                          d="M21.894 11.553C19.736 7.236 15.904 5 12 5c-3.903 0-7.736 2.236-9.894 6.553a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19c3.903 0 7.736-2.236 9.894-6.553a1 1 0 0 0 0-.894zM12 17c-2.969 0-6.002-1.62-7.87-5C5.998 8.62 9.03 7 12 7c2.969 0 6.002 1.62 7.87 5-1.868 3.38-4.901 5-7.87 5z"
                          fill="#ffffff"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border rounded focus:ring-2"
                  />
                </div>

                <div className="ml-3 text-sm">
                  <label htmlFor="" className="font-light text-gray-300">
                    I accept the{" "}
                    <a
                      href="#"
                      className="font-medium text-indigo-400 hover:text-indigo-500"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white focus:ring-2 focus:ring-indigo-500 bg-indigo-800 py-3 rounded-xl hover:bg-indigo-900"
              >
                Create Account
              </button>

              <div className="w-full flex flex-col justify-center items-center gap-1">
              <p className="text-sm font-light text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-indigo-400 hover:text-indigo-500"
                >
                  Login here
                </Link>
              </p>

              <GoogleLogin
                      onSuccess={handleLoginSuccess}
                      onError={handleLoginError}
                    />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
