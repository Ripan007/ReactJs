import React from 'react'

const Card = (props) => {
    return (
        <div className="dictionary">
            <div className="term">
                <dt>
                    <span className="emoji" role="img" aria-label="Tense Biceps">
                        {props.emoji}
                    </span>
                    <span>{props.name}</span>
                </dt>
                <dd>
                    {props.meaning}
                </dd>
            </div>
        </div>
    )
}

export default Card;