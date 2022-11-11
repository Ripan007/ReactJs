import React from 'react';

class Simple extends React.Component {
    work() {
        alert('code regularly')
    }
    render() {
        return (
            <button onClick={this.work}>code everyday that will fruit</button>
        )
    }
}

export default Simple;