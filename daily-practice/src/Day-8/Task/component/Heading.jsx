import React from 'react';

const date = new Date(2022, 2, 4, 11);
const currentHour = date.getHours();

let greeting;

let changeBgColor = {
    backgroundColor: "",
    color: "white",

}

if (currentHour < 12) {
    greeting = "goodMorning";
    changeBgColor.backgroundColor = "red";
} else if (currentHour < 18) {
    greeting = "goodAfternoon";
    changeBgColor.backgroundColor = "orange";
} else {
    greeting = "goodNight";
    changeBgColor.backgroundColor = "black";
}

const Heading = () => {
    return (
        <>
            <p style={changeBgColor}>{greeting}</p>
        </>
    )
}

export default Heading