import React, { Component } from 'react';

class Company extends Component {
    constructor() {
        super();
        this.state = {
            dreamCompanies: [
                "apple", "microSoft", "meta"
            ]
        }
    }
    render() {
        return (
            <>
                <p>welcome to react</p>

                {this.state.dreamCompanies.map((company) => <li>{company}</li>)}
            </>
        )
    }

}

export default Company;