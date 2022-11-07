import React from 'react';
import Expenses from './components/Expenses';

function App() {
    const expense = [
        { id: "e1", date: new Date(2022, 2, 28), title: "shopping", price: 2000 },
        { id: "e2", date: new Date(2022, 3, 21), title: "recharge", price: 1500 },
        { id: "e3", date: new Date(2022, 4, 12), title: "grocery", price: 1800 }
    ]
    return (
        <div >
            <Expenses item={expense} />


        </div>
    )
}

export default App;