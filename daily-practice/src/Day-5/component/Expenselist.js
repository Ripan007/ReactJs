import './ExpenseList.css';

function ExpenseList(props) {
    const year = props.date.toLocaleString('en-US', { month: 'long' });
    const month = props.date.toLocaleString('en-US', { day: '2-digit' });
    const day = props.date.getFullYear();


    return (
        <div className="Expense-item">
            <div className="Expense-item__date">
                <div>
                    <div>{year}</div>
                    <div>{month}</div>
                    <div>{day}</div>
                </div>
            </div>
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