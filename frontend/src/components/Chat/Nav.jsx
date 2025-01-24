import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";


const Nav = () => {
  const { logout, isAuthenticated } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", checkMobile);
    checkMobile(); // Run once on mount
  
    return () => window.removeEventListener("resize", checkMobile); // Clean up
  }, []);

  return (
    <>
      {/* <button
        className="flex fixed top-5 h-10 aspect-square lg:hidden"
        onClick={() => setIsMobile(!isMobile)}
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path 
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

      </button> */}
      
      {/* : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )} */}
        {/* <button className="ml-4" onClick={()=>setIsMobile(!isMobile)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button> */}

      {isMobile?(
        <button
        className=" flex fixed top-5 h-10 aspect-square md:hidden"
        onClick={() => setIsMobile(!isMobile)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
        
      ):(
        <header
          className={`fixed h-screen w-[150px] z-40 lg:static p-3 bg-black`}
        >
          <div className=" flex justify-between">
          <Link
            to="/"
            className="md:w-full flex gap-2 items-center justify-center pb-2 border-b-[2px] border-primary"
            s
          >
            <img
              src="/Blogo.png"
              alt="SwiftLogo"
              className="h-8"
            />
            <span className="font-semibold text-xl mr-2 text-white">Swift</span>
            
          </Link>

          
            <button className="md:hidden" onClick={()=>setIsMobile(!isMobile)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>


          </div>
          

          <nav className="h-[90%] flex flex-col my-4 justify-between">
            <div className="flex flex-col gap-5 mt-3">
              <Link to="/profile" className="flex items-end gap-2">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 32 32"
                  style={{ enableBackground: "new 0 0 32 32", fill: "#FFFFFF" }}
                  xmlSpace="preserve"
                  width={22}
                  height={22}
                >
                  <g>
                    <g>
                      <path d="M16,14c-3.8598633,0-7-3.1401367-7-7s3.1401367-7,7-7s7,3.1401367,7,7S19.8598633,14,16,14z M16,2 c-2.7568359,0-5,2.2431641-5,5s2.2431641,5,5,5s5-2.2431641,5-5S18.7568359,2,16,2z" />
                    </g>
                    <g>
                      <path d="M23.9423828,32H8.0576172C5.8203125,32,4,30.1796875,4,27.9423828c0-6.6166992,5.3833008-12,12-12s12,5.3833008,12,12 C28,30.1796875,26.1796875,32,23.9423828,32z M16,17.9423828c-5.5141602,0-10,4.4858398-10,10 C6,29.0771484,6.9228516,30,8.0576172,30h15.8847656C25.0771484,30,26,29.0771484,26,27.9423828 C26,22.4282227,21.5141602,17.9423828,16,17.9423828z" />
                    </g>
                  </g>
                </svg>
                <span className="text-white font-semibold hover:text-indigo-400">
                  Profile
                </span>
              </Link>

              <Link to="/chatHome" className="flex items-end gap-2">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
                  />
                </svg>
                <span className="text-white font-semibold hover:text-indigo-400">
                  Chats
                </span>
              </Link>
            </div>

            <Link className="flex items-end gap-1 text-white">
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(180)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
              <button
                onClick={logout}
                className="font-semibold hover:text-indigo-400"
              >
                Logout
              </button>
            </Link>
          </nav>
        </header>
      )}
    </>
  );
};

export default Nav;
