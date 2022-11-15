import React from 'react';




const Note = (props) => {
    return (
        <div className="note">
            <h1 className="note__title">{props.title}</h1>
            <p className="note__content">{props.content}</p>
        </div>
    )

}

export default Note;