import React from 'react'

const SignUpForm = () => {

    const userInfo = {
        username: '',
        password: '',
        message: '',
    }


    const inputUser = (e) => {
        // if (e.target.id === "username") {
        //     userInfo.username = e.target.value
        // } else if (e.target.id === "password") {
        //     userInfo.password = e.target.value
        // } else if (e.target.id === "message") {
        //     userInfo.message = e.target.value
        // }

        userInfo[e.target.id] = e.target.value

    }

    const submits = (e) => {
        e.preventDefault();
        console.log(userInfo);


    }


    return (
        <>
            <form onSubmit={submits}>
                <label htmlFor="username">username:</label>
                <input onChange={inputUser} type="text" id="username" placeholder="username" name="username" />
                <label htmlFor="password">password:</label>
                <input onChange={inputUser} type="text" id="password" placeholder="password" name="password" />
                <label htmlFor="message">message:</label>
                <input onChange={inputUser} type="text" id="message" placeholder="message" name="message" />
                <button>submit password</button>


            </form>
        </>
    )
}

export default SignUpForm;