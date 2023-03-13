import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSquareJs, faSass, faBootstrap, faVuejs, faReact, faNode, faPython } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as MongoDB_SlateBlue } from '../assets/MongoDB_SlateBlue.svg';
import React from "react";

const About = () => {

    return (
        <div id="about" className="container grid">
            <h1 className="header-1">What I do</h1>
            <div className="card mt-md-0 ml-md-0">
                <div className="outline"></div>
                <div className="card-body lang">
                    <h3 className="card-title">
                        Languages
                    </h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon
                                icon={faHtml5}
                                className='small-icon'
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faCss3Alt}
                                className='small-icon'
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faSquareJs}
                                className='small-icon'
                            />
                        </li>
                        <li><FontAwesomeIcon
                            icon={faPython}
                            className='small-icon'
                        />

                        </li>
                    </ul>
                </div>
            </div>
            <div className="card mt-md-0 ml-md-0">
                <div className="outline"></div>
                <div className="card-body width-25% frame">
                    <h3 className="card-title">
                        Frameworks
                    </h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon
                                icon={faSass}
                                className='small-icon'
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faBootstrap}
                                className='small-icon'
                            />
                        </li>
                        <li>Express</li>
                        <li>
                            <FontAwesomeIcon
                                icon={faVuejs}
                                className='small-icon'
                            />
                        </li>
                        <li>Django</li>
                    </ul>
                </div>
            </div>
            <div className="card mt-md-0 ml-md-0">
                <div className="outline"></div>
                <div className="card-body width-25% lib">
                    <h3 className="card-title">
                        Libraries
                    </h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon
                                icon={faReact}
                                className='small-icon react'
                            />
                        </li>
                        <li>Sequelize</li>
                        <li>Mongoose</li>

                    </ul>
                </div>
            </div>
            <div className="card mt-md-0 ml-md-0">
                <div className="outline"></div>
                <div className="card-body width-25% env">
                    <h3 className="card-title">
                        Environments
                    </h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon
                                icon={faNode}
                                className='small-icon'
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card mt-md-0 ml-md-0">
                <div className="outline"></div>
                <div className="card-body width-25% data">
                    <h3 className="card-title">
                        Databases
                    </h3>
                    <h6>SQL</h6>
                    <ul>
                        <li>PostgreSQL</li>
                    </ul>
                    <h6>NoSQL</h6>
                    <ul>
                        <li>
                            <MongoDB_SlateBlue
                                className="img-fluid mongo-db d-flex top-50 start-0"
                                height="60"
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card mt-md-0 ml-md-0">
                <div className="outline"></div>
                <div className="card-body width-25% misc">
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
        </div>
    )
}

export default About