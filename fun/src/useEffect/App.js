import React, { useState, useEffect } from "react";

export const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  // useEffect(() => {
  //   alert("i clicked the button");
  // });
  // useEffect(() => {
  //   alert("i clicked the button");
  // }, []);
  useEffect(() => {
    alert("i clicked the button");
  }, [num]);

  // ? empty array
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click me {num}
      </button>
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        click me {nums}
      </button>
    </>
  );
};

// ? useEffect direct the component what it should do after  rendering of the component
// ? componentDidMount , componentDidUpdate , componentWillUnmount
// ? page render , rendering , change anything => useEffect came into existence
// ? in functional component hook should be placed at top hierarchy
// ? change => render => useEffect => render => useEffect
// ? [] emptyArray will work only when we first time refresh the page
