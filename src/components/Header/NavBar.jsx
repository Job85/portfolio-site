import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import '../../scss/layout/_navigation.scss';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" height="100rem" width="100rem" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="about">About</a>
                        <a className="nav-link" href="projects">Projects</a>
                    </div>
                </div>
                <a href="https://www.linkedin.com/in/julian-jernigan813/" target='_blank'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Job85" target='_blank'>
                    <FaGithub />
                </a>
            </div>
        </nav>
        //    <nav className="navbar navbar-light bg-light">
        //         <div className="container-fluid">
        //             <div className="container">
        //                 <a className="navbar-brand">
        //                     <img src={logo} alt="" height="100rem" width="100rem" />
        //                 </a>
        //             </div>
        //             <div className="navbar-nav">
        //                 <a href="#">Home</a>
        //                 <a href="about">About</a>
        //                 <a href="projects">Projects</a>
        //             </div>
        //         </div>
        //     </nav>
    )
}

// exported to Header.jsx
export default NavBar