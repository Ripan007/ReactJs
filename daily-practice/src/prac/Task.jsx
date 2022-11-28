import React, { useState, useEffect } from 'react';


const Task = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
        console.log('count from add ', count);

    }

    useEffect(() => {
        console.log('count from useEffect', count);
    })


    return (
        <>
            <div className="container bg-danger m-4 rounded-3 p-4">
                <h1>{count}</h1>
                {/* <button className="btn btn-primary" onClick={() => setCount(count + 1)}>increment</button> */}
                <button className="btn btn-primary" onClick={add}>increment</button>
            </div>

        </>
    )
}

export default Task;