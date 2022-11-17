import React, { Component } from 'react';

class Map extends Component {
    constructor() {
        super();
        this.state = {
            companies: ["apple", "microsft", "google"]
        }
    }
    render() {
        return (
            <>
                <ul>
                    {this.state.companies.map((company) => <li> {company}</li>)}
                </ul>

            </>




        )
    }
}


export default Map;