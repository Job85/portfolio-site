import React, { useRef, useEffect, useState } from "react";
import cn from "classnames";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const PCard = ({ card }) => {

    const [flip, setFlip] = useState(false);
    const frontRef = useRef(null);
    const backRef = useRef(null);
    const cardRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

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


    useEffect(() => {
        const frontHeight = frontRef.current.offsetHeight;
        const backHeight = backRef.current.offsetHeight;
        setContentHeight(Math.max(frontHeight, backHeight));
    }, [flip]);

    useEffect(() => {
        cardRef.current.style.height = `${contentHeight}px`;
    }, [contentHeight]);

    useEffect(() => {
        const handleResize = () => {
            const frontHeight = frontRef.current.offsetHeight;
            const backHeight = backRef.current.offsetHeight;
            console.log("Front Height:", frontHeight);
            console.log("Back Height:", backHeight);
            setContentHeight(Math.max(frontHeight, backHeight));
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [flip]);

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
                            <Card.Img src={card.img} alt="Card Image" />
                            <Card.Text>
                                {card.text}
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
                            <Card.Title>
                                {card.title2}
                            </Card.Title>
                            <Card.Header>
                                {card.subTitle}
                            </Card.Header>
                            <ListGroup>
                                {card.listGroup.map((item, index) => (
                                    <ListGroup.Item
                                        key={index}
                                        className="linear-grad-background"
                                    >
                                        {item}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <Card.Header>
                                {card.subTitle2}
                            </Card.Header>
                            <ListGroup>
                                {card.listGroup2.map((item, index) => (
                                    <ListGroup.Item
                                        key={index}
                                        className="linear-grad-background"
                                    >
                                        {item}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <Card.Header>
                                {card.subTitle3}
                            </Card.Header>
                            <ListGroup>
                                {card.listGroup3.map((item, index) => (
                                    <ListGroup.Item
                                        key={index}
                                        className="linear-grad-background"
                                    >
                                        {item}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <Card.Link href={card.site}>Deployed Site</Card.Link>
                            {card.gitHub || card.gitHub2 ? (
                                <div>
                                    <Card.Link href={card.gitHub}>Front-End Repo</Card.Link>
                                    <Card.Link href={card.gitHub2}>Back-End Repo</Card.Link>
                                </div>
                            ) :
                                <div>
                                    Client Website Source Code Private
                                </div>
                            }

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PCard