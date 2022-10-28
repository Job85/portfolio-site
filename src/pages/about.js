import React from "react";
import Email from "../components/Email";

const About = () => {

    return (
        <div id="about" className="container">
            <h1>What I do</h1>
            <div className="card mt-md-0 ml-md-0 lang">
                <div className="card-body">
                    <h3 className="card-title">
                        Languages
                    </h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
            <div className="card mt-md-0 ml-md-0 frame">
                <div className="card-body width-25%">
                    <h3 className="card-title">
                        Frameworks
                    </h3>
                    <ul>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>Express</li>
                        <li>Vue</li>
                        <li>Django</li>
                    </ul>
                </div>
            </div>
            <div className="card mt-md-0 ml-md-0 lib">
                <div className="card-body width-25%">
                    <h3 className="card-title">
                        Libraries
                    </h3>
                    <ul>
                        <li>React JS</li>
                        <li>Sequelize</li>
                        <li>Mongoose</li>

                    </ul>
                </div>
            </div>
            <div className="card mt-md-0 ml-md-0 env">
                <div className="card-body width-25%">
                    <h3 className="card-title">
                        Environments
                    </h3>
                    <ul>
                        <li>Node JS</li>
                    </ul>
                </div>
            </div>
            <div className="card mt-md-0 ml-md-0 data">
                <div className="card-body width-25%">
                    <h3 className="card-title">
                        Databases
                    </h3>
                    <h6>SQL</h6>
                    <ul>
                        <li>PostreSQL</li>
                    </ul>
                    <h6>NoSQL</h6>
                    <ul>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
            <div className="card mt-md-0 ml-md-0 misc">
                <div className="card-body width-25%">
                    <h3 className="card-title">
                        Misc.
                    </h3>
                    <ul>
                        <li>RESTful API's</li>
                        <li>Full-stack application development</li>
                        <li>Full C.R.U.D Operations</li>
                        <li>Email JS</li>
                        <li>Json Web Token</li>
                        <li>Authentication</li>
                    </ul>
                </div>
            </div>
            <h3>How to reach me</h3>
            <Email />
        </div>
    )
}

export default About