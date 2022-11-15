import React from 'react';
import Input from './Input';

const Login = () => {
    return (
        <>
            <h1>Hello</h1>
            <form className="form">
                <Input />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;