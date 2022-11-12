import React, { useState } from 'react';

function Card(props) {

    const [title, setTitle] = useState(props.title);

    function change() {

        setTitle('my title get changed')

    }
    return (
        <div className="card">
            <p className="card__title">{title}</p>
            <button onClick={change} className="card__button">click</button>
        </div>
    )
}

export default Card;