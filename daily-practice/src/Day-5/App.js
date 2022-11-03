
import Expenses from './component/Expenses';

function App() {
    const Expense = [
        { id: 1, dat: new Date(2022, 2, 28), desc: "shopping", pri: 1500 },
        { id: 2, dat: new Date(2022, 4, 16), desc: "grocery", pri: 2500 },
        { id: 3, dat: new Date(2022, 6, 13), desc: "recharge", pri: 800 }
    ]
    return (
        <>
            <Expenses items={Expense} />

        </>

    )
}

export default App;