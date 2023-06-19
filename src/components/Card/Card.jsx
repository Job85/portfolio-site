import React, { useRef, useEffect, useState } from "react";
import cn from "classnames";
import Card from "react-bootstrap/Card";

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

    const frontRef = useRef(null);
    const backRef = useRef(null);
    const cardRef = useRef(null);

    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        setContentHeight(frontRef.current.offsetHeight);
    }, [])

    const updateContentHeight = () => {
        setContentHeight(flip ? backRef.current.offsetHeight : frontRef.current.offsetHeight);
    }

    useEffect(() => {
        updateContentHeight();
    }, [flip, card.variant])

    useEffect(() => {
        cardRef.current.style.height = `${contentHeight + 40}px`;
    }, [contentHeight]);

    return (
        <div
            ref={cardRef}
            className={cn("flip-card", {
                "focus-trigger": card.variant === 'focus',
                flipped: flip
            })}
            onClick={handleClick}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card
                        ref={frontRef}
                        className="custom-card"
                    >
                        <Card.Title>
                            {card.title}
                        </Card.Title>
                        <Card.Body>
                            {card.front}
                            <Card.Text>
                                {card.paragraph}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div
                    className="flip-card-back">
                    <Card
                        ref={backRef}
                        className="back-card custom-card"
                    >
                        <Card.Body>
                            <Card.Text>
                                <Card.Subtitle>
                                    Technologies
                                </Card.Subtitle>
                                {card.details}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PCard