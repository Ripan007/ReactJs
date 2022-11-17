import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }


    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }


    }

    return (
        <>
            <div className="container" >
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default Counter


