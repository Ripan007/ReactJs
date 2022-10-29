import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';
function Card(props) {
    return (
        <>
            <div className="container">
                <div className="top">
                    <p>{props.name}</p>
                    <Avatar img={props.image} />
                    <p>{props.age}</p>
                </div>
                <div className="bottom">
                    <Detail info={props.mail} />
                    <Detail info={props.phone} />
                </div>
            </div>
        </>
    )
}

export default Card;