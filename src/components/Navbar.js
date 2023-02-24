import React from 'react'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
        <NavLink to="/">About me</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume">Resume</NavLink>
    </div>
  )
}

export default Navbar