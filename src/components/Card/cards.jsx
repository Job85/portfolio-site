import token from "../../assets/Token_Huntr.png";
import inventory from "../../assets/Restaurant-Inventory-App.png";
import qc from "../../assets/QCDetailing.png";
import { Card } from "react-bootstrap";
// styled from _card.scss

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
            <Card.Link
                style={{ color: '#4ffb12' }}
                className="card-link"
                href="https://token-huntr-app.web.app/"
                target="blank"
            >
                @Token Huntr
            </Card.Link>,
        gitHub:
            <Card.Link
                style={{ color: '#4ffb12' }}
                className="card-link"
                href="https://github.com/Job85/token-huntr-app"
                target="blank"
            >
                GitHub Front-End
            </Card.Link>,
        gitHub2:
            <Card.Link
                style={{ color: '#4ffb12' }}
                className="card-link"
                href="https://github.com/Job85/token-huntr"
                target="blank"
            >
                GitHub Back-End
            </Card.Link>
        ,
        details:
            <div className="card-details">
                <h6 className="card-header">Languages</h6>
                <ul className="list-wrapper">
                    <li className="card-list">CSS</li>
                    <li className="card-list">JavaScript</li>
                </ul>
                <h6 className="card-header">Libraries</h6>
                <ul className="list-wrapper">
                    <li className="card-list">React.js</li>
                    <li className="card-list">Styled-components</li>
                    <li className="card-list">validator.js</li>
                    <li className="card-list">Axios</li>
                    <li className="card-list">Font Awesome</li>
                </ul>
                <h6 className="card-header">Database</h6>
                <ul className="card-list">PostgreSQL</ul>
            </div>
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
        link:
            <Card.Link
                style={{ color: '#4ffb12' }}
                className="card-link"
                href="https://restaurant-inventory-77229.web.app"
                target="blank"
            >
                @Restaurant-Inventory
            </Card.Link>,
        gitHub:
            <Card.Link
                style={{ color: '#4ffb12' }}
                className="card-link"
                href="https://github.com/Job85/Restaurant-Inventory-App"
                target="blank"
            >
                GitHub Front-End
            </Card.Link>,
        gitHub2:
            <Card.Link
                style={{ color: '#4ffb12' }}
                className="card-link"
                href="https://github.com/Job85/inventory-app-backend"
                target="blank"
            >
                GitHub Back-End
            </Card.Link>
        ,
        details:
            <div className="card-details">
                <h6 className="card-header">Languages</h6>
                <ul className="list-wrapper">
                    <li className="card-list">CSS</li>
                    <li className="card-list">JavaScript</li>
                </ul>
                <h6 className="card-header">Libraries</h6>
                <ul className="list-wrapper">
                    <li className="card-list">React.js</li>
                    <li className="card-list">Styled-components</li>
                    <li className="card-list">validator.js</li>
                    <li className="card-list">Axios</li>
                    <li className="card-list">Font Awesome</li>
                </ul>
                <h6 className="card-header">Database</h6>
                <ul className="card-list">PostgreSQL</ul>
            </div>
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
            <Card.Link
                style={{ color: '#4ffb12' }}
                href="https://qcdetailing.net/"
                target="blank"
            >
                QC Detailing
            </Card.Link>,
        details:
            <div className="card-details">
                <h6 className="card-header">Languages</h6>
                <ul className="list-wrapper">
                    <li className="card-list">CSS</li>
                    <li className="card-list">JavaScript</li>
                </ul>
                <h6 className="card-header">Libraries</h6>
                <ul className="list-wrapper">
                    <li className="card-list">React.js</li>
                    <li className="card-list">Styled-components</li>
                    <li className="card-list">validator.js</li>
                    <li className="card-list">Axios</li>
                    <li className="card-list">Font Awesome</li>
                </ul>
                <h6 className="card-header">Database</h6>
                <ul className="card-list">PostgreSQL</ul>
            </div>
    }
];

export default cards