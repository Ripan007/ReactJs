import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

    return (
        <div className="expense-container container">
            <div className="expense-item ">
                <div className="expense-item__date">
                    <ExpenseDate date={props.date} />
                </div>
                <div className="expense-item__description">{props.title}</div>
                <div className="expense-item__price">{props.price}</div>
            </div>
        </div>

    )
}


export default ExpenseItem;