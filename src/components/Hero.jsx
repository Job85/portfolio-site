import React from "react";
import Home from '../pages/home';
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import '../bootstrap/scss/components/_hero.scss';
import FirefliesBackground from "./FireFliesBackground";

const Hero = () => {

    return (
        <div>
            <div className="hero">
                <Home />
            </div>
            <div className="page">
                {/* <FirefliesBackground /> */}
                <Skills />
                <Projects />
            </div>
        </div>
    )
}

export default Hero