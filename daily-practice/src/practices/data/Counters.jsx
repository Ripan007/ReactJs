import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    constructor() {
        super();
        this.state = {
            counter: [
                { initialValue: 10 },
                { initialValue: 20 },
                { initialValue: 30 },
                { initialValue: 40 },
                { initialValue: 50 },
                { initialValue: 60 }
            ]
        }
    }
    render() {
        return (
            <>

                {this.state.counter.map((counterObj) => <Counter initialValue={counterObj.initialValue} />)}


            </>
        )
    }
}

export default Counters;