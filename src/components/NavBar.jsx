import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';
import '../scss/layout/_navigation.scss';

const NavBar = () => {
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 40) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };

    window.addEventListener('scroll', changeNavbarColor);

    return (
        <nav className={colorChange ? 'navbar navbar-expand-md pt-3 sticky-top colorChange' : 'navbar navbar-expand-md pt-3 sticky-top'}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" className="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="#">Home</Link>
                        <Link className="nav-link" to="#about">About</Link>
                        <Link className="nav-link" to="#projects">Projects</Link>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/julian-jernigan813/" target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/Job85" target='_blank'>
                            <FontAwesomeIcon className='icon' icon={faGithub} />
                        </a>
                    </div>
                </div>
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