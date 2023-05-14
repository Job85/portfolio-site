import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import LogoCanvas from "./LogoCanvas";
import '../bootstrap/scss/layout/_navigation.scss';

const NavBar = () => {
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };

    window.addEventListener('scroll', changeNavbarColor);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        const yOffset = -180;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    return (
        <Navbar
            collapseOnSelect expand='lg'
            className={colorChange ? 'pt-3 pb-0 sticky-top colorChange' : 'pt-3 pb-0 sticky-top'}
            id="navbar"
        >
            <Container className="d-flex justify-items-center me-100">
                <Navbar.Brand className="" href="#">
                    <LogoCanvas />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="me-100" id="responsive-navbar-nav">
                    <Nav className="" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="120">
                        <Nav.Link className="" onClick={() => scrollToSection("home")}>Home</Nav.Link>
                        <Nav.Link className="" onClick={() => scrollToSection("skills")}>Skills</Nav.Link>
                        <Nav.Link className="" onClick={() => scrollToSection("projects")}>Projects</Nav.Link>
                        <a href="https://www.linkedin.com/in/julian-jernigan813/" target='blank'>
                            <FontAwesomeIcon className='icon' icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/Job85" target='blank'>
                            <FontAwesomeIcon className='icon' icon={faGithub} />
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// exported to Header.jsx
export default NavBar