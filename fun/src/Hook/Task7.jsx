import React, { useState, useEffect } from "react";

export const Task7 = () => {
  useEffect(() => {
    document.title = `count ${count}`;
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("inside");
  });
  console.log("outside");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};
