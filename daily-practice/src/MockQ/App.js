import React from 'react';

class fun extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "dev",
            role: "developer"
        }
    }

    render() {
        return (
            <>
                <h1>{`name is ${this.state.name}`}</h1>
                <h1>{`role is ${this.state.role}`}</h1>
                <h2>name</h2>

            </>
        )
    }
}

export default fun;