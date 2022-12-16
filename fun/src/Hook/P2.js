import React, { useState } from "react";

export const P2 = () => {
  const [name, setName] = useState("not clicked");

  function changeState() {
    let val = name;
    // if (val === "not clicked") {
    //   setName("clicked");
    // } else {
    //   setName("not clicked");
    // }

    // ? ternary operator
    val === "not clicked" ? setName("clicked") : setName("not clicked");

    // ? ternary operator
  }
  return (
    <>
      <h1>{name}</h1>
      <button onClick={changeState}>click</button>
    </>
  );
};
