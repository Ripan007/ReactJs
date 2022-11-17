import React, { useState } from 'react'

const Time = () => {
    let time = new Date().toLocaleTimeString();
    const [now, setTime] = useState(time);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    return (
        <div className="container">

            <h1>{now}</h1>
            <button onClick={updateTime}>Get Time</button>
        </div>
    )
}

export default Time;