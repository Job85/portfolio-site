import React from "react";
import Email from "../components/Email";

const About = () => {

    return (
        <div>
            <h1>What I do</h1>
            <h3>Languages</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
            </ul>
            <h3>Frameworks</h3>
            <ul>
                <li>SCSS</li>
                <li>Bootstrap</li>
                <li>Express</li>
                <li>Vue</li>
                <li>Django</li>
            </ul>
            <h3>Libraries</h3>
            <ul>
                <li>React JS</li>
                <li>Sequelize</li>
                <li>Mongoose</li>

            </ul>
            <h3>Environments</h3>
            <ul>
                <li>Node JS</li>

            </ul>
            <h3>Databases</h3>
            <h6>SQL</h6>
            <ul>
                <li>PostreSQL</li>
            </ul>
            <h6>NoSQL</h6>
            <ul>
                <li>MongoDB</li>
            </ul>
            <h3>Misc.</h3>
            <ul>
                <li>RESTful API's</li>
                <li>Full-stack application development</li>
                <li>Full C.R.U.D Operations</li>
                <li>Email JS</li>
                <li>Json Web Token</li>
                <li>Authentication</li>
            </ul>
            <h3>How to reach me</h3>
            <Email />
        </div>
    )
}

export default About