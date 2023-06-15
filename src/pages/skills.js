import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSquareJs, faSass, faBootstrap, faVuejs, faReact, faNode, faPython } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as MongoDBSlateBlue } from '../assets/MongoDB_SlateBlue.svg';
import { ReactComponent as PostgreSQL } from '../assets/postgresql.svg';
import { ReactComponent as Sequelize } from '../assets/sequelize.svg';
import React from "react";

const Skills = () => {

    return (
        <section id="skills">
            <h1 >Skills</h1>
            <div className="container skills-container">
                <div className="card skills-card mt-md-0 ml-md-0">
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
                <div className="card skills-card mt-md-0 ml-md-0">
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
                <div className="card skills-card mt-md-0 ml-md-0">
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
                            <li className="ms-n1-5">
                                <Sequelize
                                    className="img-fluid"
                                    width="50"
                                    height="50"
                                />
                            </li>
                            <li className="ms-n">Mongoose</li>

                        </ul>
                    </div>
                </div>
                <div className="card skills-card mt-md-0 ml-md-0">
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
                <div className="card skills-card ps-5 mt-md-0 ml-md-0">
                    <div className="card-body data">
                        <h3 className="card-title ps-4">
                            Databases
                        </h3>
                        <h6 className="pt-4">SQL</h6>
                        <ul className="ps-0">
                            <li>
                                <PostgreSQL
                                    className="img-fluid"
                                    width="90"
                                    height="90"
                                />
                            </li>
                        </ul>
                        <h6 className="pt-3 mb-0">NoSQL</h6>
                        <ul className="mongo">
                            <li>
                                <MongoDBSlateBlue
                                    className="img-fluid"
                                    width="90"
                                    height="60"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card skills-card mt-md-0 ml-md-0 w-100 p-2px">
                    <div className="card-body d-flex flex-column justify-content-center">
                        <h3 className="card-title ps-4">
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

export default Skills