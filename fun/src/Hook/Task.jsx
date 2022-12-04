// my task is to render array  data as well as clear the data using useState
// in this task i have used useState,map,key
import React, { useState } from "react";

export const Task = () => {
  const profileData = [
    { id: 0, name: "ripan", age: 27 },
    { id: 1, name: "mohit", age: 25 },
  ];
  // used state should be placed here
  const [name, setName] = useState(profileData);

  const clear = () => {
    setName([]);
  };
  return (
    <div>
      {/* using map to traverse over the data */}
      {name.map((currEle) => {
        return (
          <p key={currEle.id}>
            {" "}
            {`name is ${currEle.name} and age is ${currEle.age}`}
          </p>
        );
      })}

      <button onClick={clear}>clear</button>
    </div>
  );
};
