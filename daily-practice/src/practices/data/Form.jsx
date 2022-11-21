import React from 'react'

const Form = () => {

    let userInfo = {
        username: '',
        password: ''
    }

    const getUserName = ((e) => {
        userInfo.username = e.target.value
    })

    const getUserPassword = ((e) => {
        userInfo.password = e.target.value;
    })



    return (
        <>
            <h3>login</h3>
            <form action="">
                <label htmlFor="username"> user Name</label>
                <br />
                <input type="text" id="username" password="username" onChange={userName} />
                <br />
                <label htmlFor="password"> password</label>
                <br />
                <input type="password" id="password" password="password" />


            </form>
        </>
    )
}

export default Form;