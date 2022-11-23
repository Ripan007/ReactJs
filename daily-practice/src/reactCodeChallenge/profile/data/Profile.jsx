import React from 'react'

const profile = () => {
    const getDate = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const actualData = await res.join();
            console.log(actualData);

        } catch (err) {
            console.log(err);

        }
    }
    return (
        <>
            <h1>welcome</h1>
        </>
    )
}

export default profile;