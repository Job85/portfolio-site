import React from "react";
import NavBar from '../components/NavBar'
import Hero from "../components/Hero";

const Home = () => {

    return (
        <div id="home" className="container position-relative">
            <NavBar />
            <Hero />
            <div className="row">
                <div className="col">
                    <h1 className="heading">
                        Resolving Complex Problems <br />
                        Through <span className="bold">Innovative</span> and <span className="bold">Efficient</span> Design
                        {/* <span className="sphere container"></ span> */}
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="sub-heading">
                        Specializing as a full-stack software engineer, <br />
                        Bringing a passion for creativity and collaborative skills from the hospitality industry <br />
                        to the tech world.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Home