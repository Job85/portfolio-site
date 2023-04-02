import React, { useRef, useEffect, useState } from "react";
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


    const backRef = useRef(null);
    const cardRef = useRef(null);

    const [backHeight, setBackHeight] = useState(0);

    useEffect(() => {
        const height = backRef.current.offsetHeight;
        if (height !== backHeight) {
            setBackHeight(height);
        }
    }, [backHeight]);

    useEffect(() => {
        cardRef.current.style.height = `${backHeight + 40}px`;
    }, [backHeight]);

    return (
        <div className="card-container container col d-flex flex-column flex-md-row justify-content-around align-items-center mh-100">
            <Card
                ref={cardRef}
                tabIndex={card.id}
                className={cn("flip-card", {
                    "focus-trigger": card.variant === 'focus'
                })}
                onClick={handleClick}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                <Card.Title
                    style={{ color: '#4ffb12' }}
                >
                    {card.title}
                </Card.Title>
                <div
                    className="flip-card-outer">
                    <div
                        className={cn("flip-card-inner", {
                            flip,
                            'hover-trigger': card.variant === 'hover'
                        })}
                    >
                        <div
                            className="p-card front"
                            variant="click"
                        >
                            {card.front}
                            {card.paragraph}
                        </div>
                        <div
                            ref={backRef}
                            style={{ height: 'fit-content' }}
                            className="p-card back"
                        >
                            {card.back}
                            <h3
                                className="card-details"
                            >
                                Technologies
                            </h3>
                            {card.details}
                            <div className="d-flex ps-4">
                                <h5
                                    style={{ color: '#4ffb12' }}
                                    className="pe-3">
                                    Website
                                </h5>
                                <div
                                    style={{ color: '#4ffb12' }}
                                >
                                    {card.link}
                                </div>
                            </div>
                            {card.gitHub || card.gitHub2 ? (
                                <div className="d-flex ps-4">
                                    <h5
                                        style={{ color: '#4ffb12' }}
                                        className="pe-3">
                                        Source Code
                                    </h5>
                                    <div
                                        style={{ color: '#4ffb12' }}
                                    >
                                        {card.gitHub}
                                        {card.gitHub2}
                                    </div>
                                </div>
                            ) : <div
                                className="d-flex ps-4"
                                style={{ color: '#4ffb12' }}
                            >
                                Client Website Source Code Private
                            </div>}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PCard