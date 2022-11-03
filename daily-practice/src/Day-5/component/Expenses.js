import ExpenseList from './Expenselist';

function Expenses(props) {
    return (<div>
        <ExpenseList date={props.items[0].dat} description={props.items[0].desc} price={props.items[0].pri} />
        <ExpenseList date={props.items[1].dat} description={props.items[1].desc} price={props.items[1].pri} />
        <ExpenseList date={props.items[2].dat} description={props.items[2].desc} price={props.items[2].pri} />
    </div>
    )
}

export default Expenses;