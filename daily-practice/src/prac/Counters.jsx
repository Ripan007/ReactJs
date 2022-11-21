import React, { Component } from 'react';
import Counter from './Counter';
// import Company from './Company';

class Counters extends Component {
    constructor() {
        super();
        this.state = {
            counters: [
                { id: 1, initialValue: 10 },
                { id: 2, initialValue: 20 },
                { id: 3, initialValue: 30 },
                { id: 4, initialValue: 40 },
                { id: 5, initialValue: 50 },
                { id: 6, initialValue: 60 }
            ]
        }
        this.deleteComponent = this.deleteComponent.bind(this);
    }

    deleteComponent(id) {
        const counters = this.state.counters.filter(counterObj => counterObj.id !== id)
        this.setState({ counters: counters })
    }

    render() {
        return (
            <>
                {this.state.counters.map((counterObj) => <Counter onDelete={this.deleteComponent} id={counterObj.id} key={counterObj.id} initialValue={counterObj.initialValue} />)}
                {/* <Company /> */}

            </>
        )
    }
}



export default Counters;