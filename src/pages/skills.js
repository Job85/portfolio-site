import React from "react";
import PCard from "../components/Card/Card";
import { skillsCard } from "../components/Card/cards";

const Skills = () => {

    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className="card-wrapper">
                {skillsCard.map((card) =>
                    <PCard
                        key={card.id}
                        card={card}
                        type="skills"
                    />
                )}
            </div>
        </section>
    );
};

export default Skills