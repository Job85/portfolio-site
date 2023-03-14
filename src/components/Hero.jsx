import React from "react";
import Home from '../pages/home';
import NavBar from "./NavBar";
import About from "../pages/about";
import Projects from "../pages/projects";
import '../bootstrap/scss/components/_hero.scss';
const Hero = () => {

    return (
        <div>
            <div className="hero">
                {/* <NavBar /> */}
                <Home />
            </div>
            <div className="page">
                <About />
                <Projects />
            </div>
        </div>
    )
}

export default Hero