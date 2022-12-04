import React, { useState } from "react";
// creating  a toggle
export const Second = () => {
  const [input, setInput] = useState("welcome to react");

  const changeName = () => {
    let val = input;
    // using if-else
    //     if (val === "welcome to react") {
    //       setInput("welcome to hook");
    //     } else {
    //       setInput("welcome to react");
    //     }
    //   };

    val === "welcome to react"
      ? setInput("welcome to hook")
      : setInput("welcome to react");
  };

  return (
    <div>
      <h1>{input}</h1>
      <button onClick={changeName}>click</button>
    </div>
  );
};
