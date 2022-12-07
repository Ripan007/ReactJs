import React, { useState } from "react";
//short circuit
// using  shortCircuit we can do multiple rendering

export const Task4 = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <p>{name || "welcome to react"}</p>
      <p>
        {name || (
          <>
            <ul>
              <ol>welcome to react </ol>
              <ol>react is awesome </ol>
            </ul>
          </>
        )}
      </p>
      <p>{name && "welcome to react hook"}</p>
    </div>
  );
};
