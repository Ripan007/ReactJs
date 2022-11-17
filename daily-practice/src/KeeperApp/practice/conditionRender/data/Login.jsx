import React from 'react';
import Input from './Input';

const Login = () => {
    return (
        <>

            <form className="form">
                <Input type="type" placeholder="username" />
                <Input type="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;