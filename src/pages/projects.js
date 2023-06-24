import React from "react";
import PCard from "../components/Card/Card";
import { projectCards } from "../components/Card/cards";

const Projects = () => {

    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="card-wrapper">
                {projectCards.map((card) =>
                    <PCard key={card.id} card={card} type="projects" />
                )}
            </div>
        </section>
    )
}

export default Projects