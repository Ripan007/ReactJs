// create a class components

// creating a setStat
// creating a dynamic input variables

import { Component } from 'react';
export class Practice extends Component {
    constructor() {
        super();
        this.show = this.show.bind(this)
        this.state = {
            name: 'default',
            role: 'default'
        }
    }


    show() {
        this.setState({ name: 'ripan', role: 'programmer' })
        console.log(this);
    }

    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <h2>{this.state.role}</h2>
                <button onClick={this.show}>render</button>

            </>


        )


    }

}