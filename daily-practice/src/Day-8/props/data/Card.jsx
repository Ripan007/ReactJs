import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <p>{props.id}</p>
                <h2 className="name">{props.name}</h2>
                <Avatar image={props.image} />
            </div>
            <div className="bottom">
                <Detail detailInfo={props.contact}></Detail>
                <Detail detailInfo={props.mail}></Detail>
            </div>
        </div >
    )
}

export default Card;