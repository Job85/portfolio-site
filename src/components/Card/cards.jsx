import token from "../../assets/Token_Huntr.png";
import inventory from "../../assets/Restaurant-Inventory-App.png";
import qc from "../../assets/QCDetailing.png";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
// styled from _card.scss

const text1 = "A web app for the adventerous to go Geo Caching. Using REST API's users have the ability to perform full CRUD of the locations model. \n Click to flip card"
const text2 = "A web app for the hospitality industry designed to streamline the inventory process. Using REST API's users have the ability to perform full CRUD of the items model. \n Click to flip card"
const text3 = "A website built for a client per their details and with UX and UI design standards per my suggestions. \n Click to flip card"

let newText1 = text1.split('\n').map(i => {
    return <p className="card-text" style={{ color: '#4ffb12' }}
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
        front: <Card.Img
            src={token}
            alt='Token Huntr App'
            className="img"
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
            <div>
                <Card.Header>Languages</Card.Header>
                <ListGroup varient="flush">
                    <ListGroup.Item>CSS</ListGroup.Item>
                    <ListGroup.Item>JavaScript</ListGroup.Item>
                </ ListGroup>
                <Card.Header>Libraries</Card.Header>
                <ListGroup varient="flush">
                    <ListGroup.Item>React.js</ListGroup.Item>
                    <ListGroup.Item>Styled-components</ListGroup.Item>
                    <ListGroup.Item>validator.js</ListGroup.Item>
                    <ListGroup.Item>Axios</ListGroup.Item>
                    <ListGroup.Item>Font Awesome</ListGroup.Item>
                </ListGroup>
                <Card.Header>Database</Card.Header>
                <ListGroup>
                    <ListGroup.Item>PostgreSQL</ListGroup.Item>
                </ListGroup>
            </div>
        ,
    },
    {
        id: '2',
        variant: "click",
        front:
            <Card.Img
                src={inventory}
                alt='Inventory App'
                className="img-top"
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
            <div>
                <Card.Header
                    style={{ width: '50%' }}
                >Languages
                </Card.Header>
                <ul className="list-wrapper">
                    <li className="card-list">CSS</li>
                    <li className="card-list">JavaScript</li>
                </ul>
                <Card.Header className="card-header">Libraries</Card.Header>
                <ul className="list-wrapper">
                    <li className="card-list">React.js</li>
                    <li className="card-list">Styled-components</li>
                    <li className="card-list">validator.js</li>
                    <li className="card-list">Axios</li>
                    <li className="card-list">Font Awesome</li>
                </ul>
                <Card.Header className="card-header">Database</Card.Header>
                <ul className="card-list">PostgreSQL</ul>
            </div>
    },
    {
        id: '3',
        variant: 'click',
        front:
            <Card.Img
                variant="top"
                src={qc}
                alt='Quality Cleaners'
                className=""
            // style={{ width: "inherit" }}
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
                <Card.Header className="card-header">Languages</Card.Header>
                <ul className="list-wrapper">
                    <li className="card-list">CSS</li>
                    <li className="card-list">JavaScript</li>
                </ul>
                <Card.Header className="card-header">Libraries</Card.Header>
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