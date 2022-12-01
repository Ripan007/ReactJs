import React, { Component } from 'react';

export class Updation extends Component {
    constructor() {
        super();
        console.log('calling constructor');
    }

    static getDerivedStateFromProps() {
        console.log('calling getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');

    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
    }


    render() {
        console.log('calling render');
        return (
            <div>

            </div>
        );
    }
}

