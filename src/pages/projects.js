import React from "react";
import PCard from "../components/Card";
import token from "../assets/Token_Huntr.png";
import inventory from "../assets/Restaurant-Inventory-App.png";
import qc from "../assets/QCDetailing.png"

const cards = [
    {
        id: "1",
        variant: "click",
        front: <img
            src={token}
            alt='Token Huntr App'
            className="img"
            style={{ width: "inherit" }}
        />,
        title: "Token Huntr",
        link:
            <a
                href="https://token-huntr-app.web.app/"
                target="blank"
            >
                @Token Huntr
            </a>,
        details:
            <p>
                <h6>Languages</h6>
                <ul> CSS, JavaScript</ul>
                <h6>Libraries</h6>
                <ul>
                    React.js
                    Styled-components
                    validator.js
                    Axios
                    Font Awesome
                </ul>
                <h6>Database</h6>
                <ul>PostgreSQL</ul>
            </p>
        ,
    },
    {
        id: '2',
        variant: "click",
        front:
            <img
                src={inventory}
                alt='Inventory App'
                className="img-top"
                style={{ width: "inherit" }}
            />,
        title: 'Inventory App',
        back: "Back"
    },
    {
        id: '3',
        variant: 'click',
        front:
            <img
                src={qc}
                alt='Quality Cleaners'
                className=""
                style={{ width: "inherit" }}
            />,
        title: 'Quality Cleaners Detailing',
        link:
            <a
                href="https://qcdetailing.net/"
                target="blank"
            >
                QC Detailing
            </a>
    }
];

const Projects = () => {

    return (
        <div id="projects">
            <div className="card-wrapper col d-flex flex-column flex-md-row justify-content-around align-items-center">
                {cards.map((card) =>
                    <PCard key={card.id} card={card} />
                )}
            </div>
        </div>
    )
}

export default Projects