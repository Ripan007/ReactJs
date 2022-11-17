import React, { Component } from 'react';

class State extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hi"
        }
    }

    welcome() {
        this.setState({
            message: "welcome"
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.welcome()}>submit</button>

            </>
        )
    }
}

export default State;