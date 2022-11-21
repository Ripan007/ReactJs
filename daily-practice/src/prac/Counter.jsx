import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialValue,
            id: props.id
        }
    }

    plus() {
        this.setState({ count: this.state.count + 1 })
    }
    minus() {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }

    }
    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <button onClick={() => this.plus()}>+</button>
                <button onClick={() => this.minus()}>-</button>
                <button onClick={() => this.props.onDelete(this.state.id)}>delete</button>

            </>
        )
    }

}


export default Counter;