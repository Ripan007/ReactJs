// useEffect dependency

import React, { useState, useEffect } from "react";

export const Task9 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 1) {
      document.title = `chats${count}`;
    } else {
      document.title = `chats`;
    }
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};
