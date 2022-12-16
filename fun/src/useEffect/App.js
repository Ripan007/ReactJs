import React, { useState } from "react";

export const App = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click me
      </button>
    </>
  );
};

// ? useEffect direct the component what it should do after  rendering of the component
// ? componentDidMount , componentDidUpdate , componentWillUnmount
// ? page render , rendering , change anything => useEffect came into existence
