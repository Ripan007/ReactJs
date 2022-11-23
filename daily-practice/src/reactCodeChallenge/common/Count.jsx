import React, { useState } from 'react';
import './common.css';


const Count = () => {
    let newTime = new Date().toLocaleTimeString();
    const [cTime, setTime] = useState(newTime);
    console.log(newTime);

    const updateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }
    return (
        <>
            <div className="container">
                <p>{cTime}</p>
                <button onClick={updateTime}>click</button>

            </div>

        </>
    )
}

export default Count