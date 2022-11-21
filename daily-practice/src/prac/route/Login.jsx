import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = (e) => {
            e.preventDefault();
        }
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="username">username</label>
                    <input type="text" id="username" />
                    <label htmlFor="password">password</label>
                    <input type="text" id="password" />
                    <button>login</button>
                </form>
            </>
        )
    }
}




export default Login;