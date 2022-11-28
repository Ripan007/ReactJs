import React from 'react'

const Form2 = (props) => {
    return (
        <>
            <p>name:{props.name}</p>
            <p>message:{props.message}</p>
            <p>phone:{props.phone}</p>
            {/* <p>message:{user.message}</p>
            <p>phone:{user.phone}</p> */}
            <button onClick={() => props.cToP('random')}> click to print </button>
        </>
    )
}

export default Form2;

