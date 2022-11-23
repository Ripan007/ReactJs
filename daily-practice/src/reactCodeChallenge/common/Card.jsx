import React from 'react';
import './common.css';



const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="card__top">
                    <img className="card__image" src={props.image} alt="nature" />
                </div>
                <div className="card__bottom">
                    <h3> {props.describe}</h3>
                </div>
            </div>
        </>
    )
}

export default Card;