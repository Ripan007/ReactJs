import React, { useState } from "react";
// task is to use spread operator
// change input dynamically

export const Task2 = () => {
  const [name, setName] = useState({ name: "mohit", age: 23 });

  const changeName = () => {
    setName({ ...name, name: "ripan" });
  };

  return (
    <div>
      <p>
        my name is {name.name} and age is {name.age}
      </p>
      <button onClick={changeName}>changeName</button>
    </div>
  );
};
