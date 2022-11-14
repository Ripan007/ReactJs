import React from 'react'


const date = new Date(2022, 2, 3, 14);
const currentHour = date.getHours();

let greeting;

let changeBgColor = {
    backgroundColor: "",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "white",
    fontSize: "2rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "0.5rem"

}

if (currentHour < 12) {
    greeting = "goodMorming";
    changeBgColor.backgroundColor = "red";

} else if (currentHour < 18) {
    greeting = "goodAfternoon";
    changeBgColor.backgroundColor = "orange";
} else {
    greeting = "goodNight";
    changeBgColor.backgroundColor = "black";
}

const Task7 = () => {
    return (
        <div style={changeBgColor} >
            <p className="heading">{greeting}</p>
        </div>
    )
}

export default Task7;