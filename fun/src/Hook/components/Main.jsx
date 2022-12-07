import React, { useState } from "react";
import First from "./First";
import { Second } from "./Second";
export const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      main
      <First />
      <Second />
      <p>{count}</p>
      <p name="ripan"></p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

// React.createElement(
//   "div",
//   { className: "center" },
//   React.createElement("div", "null", "first div"),
//   React.createElement("div", "null", "second div")
// );
