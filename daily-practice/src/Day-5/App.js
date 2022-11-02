import React from 'react';
import ExpenseList from './component/Expenselist';

function App() {
    const Expense = [
        { id: 1, dat: new Date(2022, 2, 28), desc: "shopping", pri: 1500 },
        { id: 2, dat: new Date(2022, 4, 16), desc: "grocery", pri: 2500 },
        { id: 3, dat: new Date(2022, 6, 13), desc: "recharge", pri: 800 }
    ]
    return (
        <>
            <ExpenseList date={Expense[0].dat} description={Expense[0].desc} price={Expense[0].pri} />
            <ExpenseList date={Expense[1].dat} description={Expense[1].desc} price={Expense[1].pri} />
            <ExpenseList date={Expense[2].dat} description={Expense[2].desc} price={Expense[2].pri} />
        </>

    )
}

export default App;