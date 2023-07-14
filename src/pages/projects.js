import React from "react";
import PCard from "../components/Card/Card";
import { projectCards } from "../components/Card/cards";

const Projects = () => {

    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="card-wrapper">
                {projectCards.map((card, index) =>
                    <PCard
                        key={card.id}
                        card={card}
                        isLastCard={index === projectCards.length - 1}
                        type="projects" />
                )}
            </div>
        </section>
    )
}

export default Projects