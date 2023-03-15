import React, { useState } from "react";

const Card = ({ card }) => {

    const [flip, setFlip] = useState(false);

    return (
        <div className="card-box">
            <div className="card-container">
                <div className="flip-card">
                    <div className={flip ? 'flip' : ''}>
                        <div className="front" onClick={() => setFlip(true)}>
                            {card.front}
                        </div>
                        <div className="back" onClick={() => setFlip(false)}>
                            {card.back}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card