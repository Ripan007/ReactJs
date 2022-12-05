import React, { useState, useEffect } from "react";
import useCustom from "./useCustom";

// customs hook
// instead of repeating the code we can  create custom hook

export const Task14 = () => {
  const [count, setCount] = useState(0);
  // custom hook
  useCustom(count);
  useEffect(() => {
    if (count > 1) {
      document.title = `chats${count}`;
    } else {
      document.title = ` chats`;
    }
  }, [count]);
  return (
    <div>
      Task14
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};
