import React, { useState, useEffect } from "react";

export const Task8 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `chats ${count}`;
    } else {
      document.title = `chats`;
    }
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};
