import React, { Component } from 'react';

class Greet extends Component {
    constructor() {
        super();
        this.state = {
            message: "welcome to the world of react state"
        }
    }

    changeMessage() {
        this.setState({ message: "change the message" })
    }

    render(props) {
        return (
            <>
                <p> {this.props.name} {this.state.message} </p>
                <button onClick={() => this.changeMessage()}>subscribe</button>
            </>

        )
    }
}

export default Greet;