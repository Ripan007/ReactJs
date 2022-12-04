import React, { useState } from "react";
// when i click it will render the page because of hook and value changes
export const First = () => {
  const [input, setInput] = useState("welcome ");

  const changeName = () => {
    setInput("welcome to react hook");
  };

  return (
    <div>
      <h1>{input}</h1>
      <button onClick={changeName}>click</button>
    </div>
  );
};
