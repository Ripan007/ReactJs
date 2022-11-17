import React, { Component } from 'react';

class Bind extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }
    decrement() {
        if (this.state.count > 0) { this.setState({ count: this.state.count - 1 }) }

    }
    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                {/* <button onClick={}>-</button> */}

            </>

        )
    }
}

export default Bind;