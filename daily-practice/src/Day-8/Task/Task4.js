function Task4() {
    const name = "ripan";
    const year = new Date().getFullYear();

    return (
        <>
            <div className="container bg-black text-white w-25 rounded-1  ">
                <p className="m-0 text-center fs-3 text-uppercase">{`created by ${name}`} </p>
                <p className="m-0 text-center">{`copyright ${year}`} </p>

            </div>
        </>
    )
}

export default Task4;