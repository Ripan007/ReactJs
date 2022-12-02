import React, { useState } from "react";
import "./Task.css";
// first task create a button and change its  state
export const Task = () => {
  const [input, setInput] = useState("welcome to react");

  const change = () => {
    setInput("fist task completed");
  };
  return (
    <>
      <div className="container bg-danger p-5 rounded">
        <h1 className="text-center text-white">{input}</h1>
        <button className="btn btn-success m-4" onClick={change}>
          click
        </button>
      </div>
    </>
  );
};
