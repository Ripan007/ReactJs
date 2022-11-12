const Form = () => {
    const eventHandler = (event) => {
        console.log(event.target.value);
    }
    return (
        <>
            <form action="">
                <input type="text" placeholder="enter the value" />
                <input type="text" onChange={eventHandler} />
            </form>
        </>
    )
}

export default Form;