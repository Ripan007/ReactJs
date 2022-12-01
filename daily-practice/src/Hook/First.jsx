import React, { useState } from "react";
import "./First.css";
export const First = () => {
  const [name, setName] = useState("ripan");

  const changeState = () => {
    // setName("ripan mondal");
    // toggle
    let val = name;
    // if (val === "ripan") {
    //   setName("ripan mondal");
    // } else {
    //   setName("ripan");
    // }

    // using ternary operator instead

    val === "ripan" ? setName("ripan mondal") : setName("ripan");
  };
  return (
    <>
      <h1>{name}</h1>
      <button className="btn btn-primary" onClick={changeState}>
        click
      </button>
    </>
  );
};
