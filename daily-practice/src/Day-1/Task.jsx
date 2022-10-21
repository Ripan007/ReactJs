let curr = new Date(2022, 5, 3, 11);
curr = curr.getHours();
let greet = "";
let changeColor = {};

if (curr >= 1 && curr < 12) {
    greet = "good morning";
    changeColor.color = "red";

} else if (curr >= 12 && curr < 19) {
    greet = "good afternoon";
    changeColor.color = "orange";
} else {
    greet = "good night";
    changeColor.color = "black";
}


function Task() {
    return (
        <>
            <h1>Hi sr ,  <span style={changeColor}>{greet}</span> </h1>
        </>
    )
}





export default Task;