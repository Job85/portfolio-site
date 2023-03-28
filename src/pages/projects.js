import React from "react";
import PCard from "../components/Card/Card";
import cards from "../components/Card/cards";

const Projects = () => {

    return (
        <section id="projects">
            <div className="card-wrapper">
                {cards.map((card) =>
                    <PCard key={card.id} card={card} />
                )}
            </div>
        </section>
    )
}

export default Projects