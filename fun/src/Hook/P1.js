import React, { useState } from "react";

export const P1 = () => {
  const [name, setName] = useState("not clicked ");

  // function click() {
  //   setName("clicked");
  // }     

  const click = () => {
    setName("clicked");
  };

  return (
    <>
      <h1>{name}</h1>
      <button onClick={click}>click</button>         
    </>
  );
};

// ! useState * //
// TODO : used when we have to change value / change state
// * we can change the state / variables
