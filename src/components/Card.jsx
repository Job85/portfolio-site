import React, { useState } from "react";
import cn from "classnames";
import { Card } from "react-bootstrap";

const PCard = ({ card }) => {

    const [flip, setFlip] = useState(false);

    const handleClick = () => {
        if (card.variant === 'click') {
            setFlip(!flip);
        }
    }

    const handleFocus = () => {
        if (card.variant === 'focus') {
            setFlip(true);
        }
    }

    const handleBlur = () => {
        if (card.variant === 'focus') {
            setFlip(false);
        }
    }

    return (
        <div className="container card-box">
            <Card
                tabIndex={card.id}
                className={cn("flip-card h-200 w-450", {
                    "focuse-trigger": card.variant === 'focus'
                })}

                onClick={handleClick}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                <Card.Title
                    className="flip-title"
                >
                    {card.title}
                </Card.Title>
                <div className="flip-card-outer">
                    <div className={cn("flip-card-inner", {
                        flip,
                        'hover-trigger': card.variant === 'hover'
                    })}>
                        <div
                            className="p-card front"
                            variant="click"
                        >
                            {card.front}
                        </div>
                        <div className="p-card back">
                            {card.back}
                            <h3>Technologies</h3>
                            {card.details}
                            <div className="d-flex ps-4">
                                <h5 className="pe-3">Website</h5>
                                <Card.Link>
                                    {card.link}
                                </Card.Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PCard