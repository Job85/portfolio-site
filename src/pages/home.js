import React from "react";
import '../scss/pages/_home.scss';
import NavBar from '../components/NavBar'
import Hero from "../components/Hero";

const Home = () => {

    return (
        <div id="home" className="container mt-5 pt-5 pt-sm-0">
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
                        My name is <span className="bold">Julian Jernigan</span>.<br />
                        <br />
                        I'm a full-stack software engineer. <br />
                        My mission is to bring my passion for creativity and collaborative skills from the hospitality industry to the tech world. <br />
                        <br />
                        <span className="bold">(Engage Reader Here)</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Home