import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSquareJs, faSass, faBootstrap, faVuejs, faReact, faNode, faPython } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as MongoDBSlateBlue } from '../assets/MongoDB_SlateBlue.svg';
import React from "react";

const About = () => {

    return (
        <section id="about">
            <h1 className="header-1">What I do</h1>
            <div className="container about-container">
                <div className="card about-card mt-md-0 ml-md-0">
                    <div className="card-body lang">
                        <h3 className="card-title ps-4">
                            Languages
                        </h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    icon={faHtml5}
                                    className='small-icon'
                                />
                            </li>
                            <li className="ms-n3">
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
                            <li className="mt-n1 pb-2">
                                <FontAwesomeIcon
                                    icon={faPython}
                                    className='small-icon'
                                />

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card about-card mt-md-0 ml-md-0">
                    <div className="card-body frame">
                        <h3 className="card-title ps-4">
                            Frameworks
                        </h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    icon={faSass}
                                    className='small-icon'
                                />
                            </li>
                            <li className="ms-n3">
                                <FontAwesomeIcon
                                    icon={faBootstrap}
                                    className='small-icon'
                                />
                            </li>
                            <li>Express</li>
                            <li className="ps-3">
                                <FontAwesomeIcon
                                    icon={faVuejs}
                                    className='small-icon'
                                />
                            </li>
                            <li className="ms-n1">Django</li>
                        </ul>
                    </div>
                </div>
                <div className="card about-card mt-md-0 ml-md-0">
                    <div className="card-body lib">
                        <h3 className="card-title">
                            Libraries
                        </h3>
                        <ul>
                            <li className="ms-n2">
                                <FontAwesomeIcon
                                    icon={faReact}
                                    className='small-icon react'
                                />
                            </li>
                            <li className="ms-n1-5">Sequelize</li>
                            <li className="ms-n">Mongoose</li>

                        </ul>
                    </div>
                </div>
                <div className="card about-card mt-md-0 ml-md-0">
                    <div className="card-body env">
                        <h3 className="card-title ps-1">
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
                <div className="card about-card mt-md-0 ml-md-0">
                    <div className="card-body data">
                        <h3 className="card-title ps-4">
                            Databases
                        </h3>
                        <h6>SQL</h6>
                        <ul>
                            <li>PostgreSQL</li>
                        </ul>
                        <h6>NoSQL</h6>
                        <ul>
                            <li>
                                <MongoDBSlateBlue
                                    className="img-fluid mongo-db d-flex top-50 start-0"
                                    width="90"
                                    height="60"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card about-card mt-md-0 ml-md-0 w-100 p-2px">
                    <div className="card-body d-flex flex-column justify-content-center">
                        <h3 className="card-title">
                            Misc.
                        </h3>
                        <ul className="">
                            <li>RESTful API's</li>
                            <li className="ms-n">Full-stack Development</li>
                            <li className="ms-n">Full C.R.U.D Operations</li>
                            <li>Email JS</li>
                            <li className="ps-2">Json Web Token</li>
                            <li className="ps-5">Authentication</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About