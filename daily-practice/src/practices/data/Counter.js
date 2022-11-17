import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialValue
        }
    }

    increment() {
        this.setState({ count: this.state.count + 1 })

    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>+</button>
                <button onClick={() => this.decrement()}>-</button>

            </>
        )
    }
}

export default Counter;