import React from "react";
import Card from "../components/Card";
import token from "../assets/Token_Huntr.png";
import inventory from "../assets/Restaurant-Inventory-App.png";

const cards = [
    {
        id: '1',
        front:
            <img
                src={token}
                alt='Token Huntr App'
                className="img-top"
                style={{ width: 30 + 'rem' }}
            />,
        back:
            <div>
                <h3>
                    Details
                </h3>
                <p>
                    A geocaching application
                </p>
                <h3>
                    Technologies
                </h3>
                <p>
                    <ul>
                        Languages - CSS, JavaScript, Axios, ReactJS, React Final-Form, Styled Components,
                    </ul>
                </p>
                <h4>Website</h4>
                <a
                    href="https://token-huntr-app.web.app/"
                >
                    @Token Huntr
                </a>
            </div>
    },
    {
        id: '2',
        front:
            <img
                src={inventory}
                alt='Inventory App'
                className="img-top"
                style={{ width: 30 + 'rem' }}
            />,
        back:
            <div>
                <h3>
                    Details
                </h3>
                <p>
                    An application to streamline a restaurant's inventory process
                </p>
                <h3>
                    Technologies
                </h3>
                <p>
                    <ul>
                        Languages - CSS, JavaScript, ReactJS, Axios,
                    </ul>
                </p>
                <h4>Website</h4>
                <a href="no_link">
                    Undeployed
                </a>
            </div>
    }
];

const Projects = () => {

    return (
        <div id="projects">
            This is My Projects Page
            <div className="card-box">
                {cards.map((card) =>
                    <Card key={card.id} card={card} />
                )}
            </div>
        </div>
    )
}

export default Projects