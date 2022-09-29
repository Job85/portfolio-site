import React from "react";
import NavBar from '../components/NavBar'

const Home = () => {

    return (
        <div className="container hero">
            <NavBar />
            <div className="row">
                <div className="col">
                    <h1>
                        Resolving Complex Problems <br />
                        Through <span className="bold">Innovative</span> and <span className="bold">Efficient</span> Design
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>
                        Specializing as a full-stack software engineer, <br />
                        Bringing a passion for creativity and collaborative skills from the hospitality industry <br />
                        to the tech world.
                    </h2>
                </div>
            </div>
            {/* <div className="row sign">
                <div className="neon-sign col">
                    <a
                        className="btn neon"
                        href="#"
                        role='button'
                    >
                        Contact Me
                    </a>
                </div>
            </div> */}
        </div>
    )
}

export default Home