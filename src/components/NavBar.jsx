import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import '../bootstrap/scss/layout/_navigation.scss';

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
        <Navbar collapseOnSelect expand='lg' className={colorChange ? 'pt-3 pb-0 sticky-top colorChange' : 'pt-3 pb-0 sticky-top'}>
            <Container className="me-100">
                <Navbar.Brand className="" href="#">
                    <img src={logo} alt="" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="me-100" id="responsive-navbar-nav">
                    <Nav className="">
                        <Nav.Link className="" aria-current="page" href="#">Home</Nav.Link>
                        <Nav.Link className="" href="#about">About</Nav.Link>
                        <Nav.Link className="" href="#projects">Projects</Nav.Link>
                        {/* <div> */}
                        <a href="https://www.linkedin.com/in/julian-jernigan813/" target='blank'>
                            <FontAwesomeIcon className='icon' icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/Job85" target='blank'>
                            <FontAwesomeIcon className='icon' icon={faGithub} />
                        </a>
                        {/* </div> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// exported to Header.jsx
export default NavBar