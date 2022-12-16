import React, { useState } from "react";
// * useState => change the state /  change the value

export const P3 = () => {
  const bioData = [
    { id: 1, name: "janvi", age: 23 },
    { id: 2, name: "shakti", age: 24 },
  ];
  const [profile, setProfile] = useState(bioData);

  function clear() {
    setProfile([]);
  }
  return (
    <>
      {profile.map((currEle) => {
        return (
          <p key={currEle.id}>
            name is {currEle.name} age is {currEle.age}
          </p>
        );
      })}
      <button onClick={clear}>clear</button>
    </>
  );
};

// ! iterate over the array using map
