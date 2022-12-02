import React, { useState } from "react";

export const List = () => {
  const [item, setItem] = useState("");
  const [lists, setLists] = useState([]);

  // access the  input
  const inputItems = (e) => {
    setItem(e.target.value);
  };

  const listItems = () => {
    setLists((oldItems) => {
      return [...oldItems, item];
    });
    setItem("");
  };

  const deleteItems = () => {
    console.log("delete items");
  };

  return (
    <>
      <h1>toDoList</h1>
      <input
        type="text"
        placeholder="enter the items"
        onChange={inputItems}
        value={item}
      />
      <button onClick={listItems}>click</button>
      <ul>
        {lists.map((listsValue, index) => {
          return (
            <div
              key={index}
              id={index}
              text={listsValue}
              onSelect={deleteItems}
            >
              <button onClick={deleteItems}>delete</button>
              <li>{listsValue}</li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
