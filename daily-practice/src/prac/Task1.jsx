import React, { useState, useEffect } from 'react';

const Task1 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(10);


    const add = () => {
        setCount1(count1 + 1)
        // console.log('console from add', count1);
    }

    useEffect(() => {
        console.log('useEffect type fist', count1);
    })

    useEffect(() => {
        console.log('useEffect type second', count1);
    }, [])

    useEffect(() => {
        console.log('useEffect type third', count1);
    }, [count1])



    return (
        <>
            <div>{count1}</div>
            <button onClick={add}>click</button>
            <h1>{count2}</h1>
            <button onClick={() => setCount2(count2 + 1)}> click</button>
        </>

    )
}

export default Task1;