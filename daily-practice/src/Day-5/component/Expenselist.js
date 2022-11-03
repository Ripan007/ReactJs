import './ExpenseList.css';
import ExpenseDate from './ExpenseDate';
function ExpenseList(props) {
    return (
        <div className="Expense-item">
            <ExpenseDate date={props.date} />
            <div className="Expense-item__description">
                <h2>{props.description}</h2>
            </div>
            <div className="Expense-item__price">
                <p>{props.price} <span style={{ marginLeft: "5px" }}>&#8377;</span>  </p>
            </div>

        </div>

    )
}
export default ExpenseList;