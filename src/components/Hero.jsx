import React from "react";
import Home from '../pages/home';
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import '../bootstrap/scss/components/_hero.scss';

const Hero = () => {

    return (
        <div>
            <div className="hero">
                <Home />
            </div>
            <div className="page">
                <Skills />
                <Projects />
            </div>
        </div>
    )
}

export default Hero