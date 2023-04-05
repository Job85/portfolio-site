import token from "../../assets/Token_Huntr.png";
import inventory from "../../assets/Restaurant-Inventory-App.png";
import qc from "../../assets/QCDetailing.png";
import { Card } from "react-bootstrap";
// styled from _card.scss

const text1 = "A web app for the adventerous to go Geo Caching. Using REST API's users have the ability to perform full CRUD of the locations model. \n Click to flip card"
const text2 = "A web app for the hospitality industry designed to streamline the inventory process. Using REST API's users have the ability to perform full CRUD of the items model. \n Click to flip card"
const text3 = "A website built for a client per their details and with UX and UI design standards per my suggestions. \n Click to flip card"

let newText1 = text1.split('\n').map(i => {
    return <p style={{ color: '#4ffb12' }}
    >
        {i}
    </p>
})
let newText2 = text2.split('\n').map(i => {
    return <p style={{ color: '#4ffb12' }}
    >
        {i}
    </p>
})
let newText3 = text3.split('\n').map(i => {
    return <p style={{ color: '#4ffb12' }}
    >
        {i}
    </p>
})

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
        paragraph:
            newText1,
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
                <ul className="list-wrapper d-flex flex-column justify-content-start">
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
        paragraph:
            newText2,
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
            <div className="card-details d-flex flex-column align-content-center">
                <h6
                    className="card-header d-flex flex-column justify-content-center"
                    style={{ width: '50%' }}
                >Languages
                </h6>
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
        paragraph:
            newText3,
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
            </div>
    }
];

export default cards