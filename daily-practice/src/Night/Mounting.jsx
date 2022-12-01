import React, { Component } from 'react';

export class Mounting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: this.props.name + 'mondal'
        }
        console.log('calling constructor');
    }

    static getDerivedStateFromProps() {
        console.log('calling getDerivedStateFromProps');
    }

    render() {
        console.log('calling render');
        return (
            <>

                <h2>mounting</h2>
                <h3>{this.props.name}</h3>
                <h3>{this.state.fullName}</h3>
            </>
        );
    }
    componentDidMount() {
        console.log('calling componentDidMount');

    }


}


