import React, { useState, memo } from "react";

const First = (props) => {
  const [input, setInput] = useState("ripan");
  console.log("first");
  return (
    <div>
      <p>
        {input} {props.name}
      </p>
      <button onClick={() => setInput("mondal")}>click</button>
    </div>
  );
};
export default memo(First);
