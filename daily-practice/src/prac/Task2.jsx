import React, { useEffect } from 'react';

const Task2 = () => {
    useEffect(() => {
        let interval = setInterval(() => {
            console.log('running');
        }, 1000)
        let timer = setTimeout(() => {
            console.log('timer');
        }, 2000)
        console.log('running useEffect');
        return () => {
            clearInterval(interval)
            clearTimeout(timer)
            console.log('cleaning up first');
            console.log('cleaning up  second');
        }
    }, [])
    return (
        <div>clean up useEffect</div>
    )
}

export default Task2;