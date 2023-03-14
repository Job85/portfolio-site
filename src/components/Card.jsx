import React from "react";
import token from "../assets/Token_Huntr.png";

const Card = () => {

    return (
        <div
            className="card-body width-25% data"
        // style={{ width: 30 + 'rem' }}
        >
            <h3 className="card-title bg-transparent ">
                Token Huntr
            </h3>
            <img
                src={token}
                className='card-img-top'
            />
            <div>

            </div>
        </div>
    )
}

export default Card