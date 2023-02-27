import React, { useEffect, useState } from "react";
import {NavLink , useLocation} from 'react-router-dom';
import {IoIosReorder} from "react-icons/io";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button
        onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}
       >
        <IoIosReorder />
       </button>
       </div>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume">Resume</NavLink>
    </div>
  )
}

export default Navbar