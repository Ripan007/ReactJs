function add(a, b) {
    return a + b;

}
function sub(a, b) {
    return a - b;

}
function mul(a, b) {
    return a * b;

}
function div(a, b) {
    return a / b;

}

function Cal() {
    return (
        <>
            <ul>
                <li>{add(5, 5)}</li>
                <li>{sub(5, 5)}</li>
                <li>{mul(5, 5)}</li>
                <li>{div(5, 5)}</li>
            </ul>
        </>
    )
}



export default Cal;