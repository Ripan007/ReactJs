import React from 'react';

class fun extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "janvi",
            age: 23
        }
    }
    render() {
        return (
            <>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
            </>
        )
    }
}

export default fun;