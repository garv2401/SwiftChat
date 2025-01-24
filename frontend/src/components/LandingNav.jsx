import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";


const LandingNav = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-800 p-4 ">
      <div className="md:max-w-screen-xl sm:w-full flex flex-wrap items-center justify-between mx-auto ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/SLogo.png"
            alt="Swift logo"
            className="h-10"
          />
          <span className="text-2xl font-semibold text-white">Swift-Chat</span>
        </a>

        {/* Hamburger Button */}
        {/* <button
          onClick={toggleMenu}
          className={`md:hidden inline-flex items-center p-2 w-10 h-10 ml-40 justify-end text-white`}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}

        {/* Navigation Links */}
        <div
          className={`md:flex md:w-auto gap-3 transition-all duration-300
            
          `}
        >
          <ScrollLink
            to="payments"
            smooth={true}
            duration={500}
            className={`flex flex-row gap-2 py-1 px-2 text-white border-2 rounded-lg border-yellow-200
            hover:bg-black cursor-pointer `}
          >
            <div className="">
              <svg
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <polygon
                  style={{ fill: "#FFEA8A" }}
                  points="0,443.733 0,68.267 17.067,68.267 136.533,187.733 256,68.267 375.467,187.733 494.933,68.267 512,68.267 512,443.733"
                />
                <polygon
                  style={{ fill: "#FFDB2D" }}
                  points="494.933,68.267 375.467,187.733 256.002,68.267 256,68.267 256,443.733 512,443.733 512,68.267"
                />
              </svg>
            </div>
            Premium
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className="hidden md:block py-1 px-2 text-white cursor-pointer hover:text-indigo-400"
          >
            Features
          </ScrollLink>
          <Link
            to={isAuthenticated ? "/chathome" : "/login"}
            className="hidden md:block py-1 px-2 text-white hover:text-indigo-400"
          >
            {isAuthenticated ? "Home" : "Login"}
          </Link>
          <Link to="/contact" className="hidden md:block py-1 px-2 text-white hover:text-indigo-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
