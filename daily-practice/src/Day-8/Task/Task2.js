function Task2() {
    const number = Math.round(Math.random() * 100);
    const name = "ripan";
    return (
        <>
            <h1>hello {name}</h1>
            <p>your lucky number is {number}</p>
        </>

    )
}

export default Task2;