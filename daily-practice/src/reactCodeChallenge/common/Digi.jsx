import React, { useState } from 'react';
import './common.css';

const Digi = () => {
    const red = "red";
    const [bg, setBg] = useState(red)
    const [text, setText] = useState("click");

    const changeBg = () => {
        const newBg = "yellow";
        setBg(newBg)
        setText("change")
    }

    return (
        <div style={{ backgroundColor: bg }} className="container-fluid">
            <button onClick={changeBg}>{text}</button>
        </div>


    )
}

export default Digi;