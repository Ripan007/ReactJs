import React, { useState } from "react";

//! doubt need to do it ones again

export const Task3 = () => {
  const profile = [
    { id: 0, name: "mohit", age: 23 },
    { id: 1, name: "raj", age: 24 },
  ];
  const [name, setName] = useState(profile);

  const clearEle = (id) => {
    const newArr = name.filter((currEle) => {
      return currEle.id == !id;
    });
    setName(newArr);
  };

  return (
    <div>
      {name.map((currEle) => {
        return (
          <p key={currEle.id}>
            my name is {currEle.name} and my age is {currEle.age}
            <button onClick={() => clearEle(currEle.id)}>delete</button>
          </p>
        );
      })}
    </div>
  );
};
