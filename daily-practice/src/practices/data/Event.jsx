import React, { useState } from 'react';

function Event() {
    const [heading, setHeading] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState("false");

    function eventHandle() {
        setHeading("Submitted")
    }

    function handleMouseOver() {
        setMouseOver(true)
    }

    function handleMouseOut() {
        setMouseOver(true)
    }

    return (
        <div className="container">
            <h1>{heading}</h1>
            <input type="text" placeholder="What's your name?" />
            <button style={{ backgroundColor: isMouseOver ? "black" : "white" }} onClick={eventHandle}
                onMouseMove={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
        </div>
    )
}

export default Event;