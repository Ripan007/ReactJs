import React from 'react'

const Form = () => {

    let userInfo = {
        userName: '',
        passWord: ''
    }


    const inputUserName = (e) => {
        userInfo.userName = e.target.value

    }

    const inputPassword = (event) => {
        userInfo.passWord = event.target.value
    }

    const submits = (e) => {
        e.preventDefault();
        console.log('userInfo');
        console.log(userInfo);
    }

    return (
        <>
            <form >
                <label htmlFor="userName">user Name:</label>
                <input onChange={inputUserName} type="text" id="userName" name="userName" placeholder="enter user name" />
                <br />
                <label htmlFor="passWord">passWord:</label>
                <input onChange={inputPassword} type="passWord" name="passWord" id="passWord" placeholder="enter  passWord" />
                <br />
                <button onClick={submits}>submit</button>
            </form>
        </>
    )
}

export default Form;