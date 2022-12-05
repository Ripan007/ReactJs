import React, { useState, useEffect } from "react";
import useCustom from "./useCustom";
// customs hook
// instead of repeating the code we can  create custom hook

export const Test = () => {
  const [count, setCount] = useState(0);
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
      Test
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};
