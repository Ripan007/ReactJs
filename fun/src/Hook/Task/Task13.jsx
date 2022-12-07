// import React, { useState } from "react";

// export const Task13 = () => {
//   const [state, setState] = useState(0);
//   return (
//     <div>
//       <p>{state}</p>
//       <button onClick={() => setState(state + 1)}>+</button>
//       <button onClick={() => setState(state - 1)}>-</button>
//     </div>
//   );
// };

import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  return state;
};
export const Task13 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};
