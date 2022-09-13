import React from "react";
import { NavLink } from "react-router-dom";
import { NavBox } from "./StyledComponents";

const NavBar = () => {

    return (
        <NavBox>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
        </NavBox>
    )
}

export default NavBar