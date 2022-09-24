import React from "react";
import { NavLink } from "react-router-dom";
import '../../scss/layout/_navigation.scss';

const NavBar = () => {

    return (
        <div className="nav-bar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
        </div>
    )
}

// exported to Header.jsx
export default NavBar