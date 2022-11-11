const arr = ["janvi", "komal"];

const Names = () => {
    const result = arr.map((x) =>
        <li key={x}>{x}</li>
    );
    return (
        <ul>{result}</ul>
    )

}

export default Names;