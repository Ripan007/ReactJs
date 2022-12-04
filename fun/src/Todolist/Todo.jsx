import React, { useState } from "react";
import { List } from "./List";
import "./Toddolist.css";

//creating a  basic todolist

export const Todo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  // function for receiving input
  const inputEvent = (e) => {
    setInput(e.target.value);
  };
  //function for printing input items
  const listOfItems = () => {
    setList((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };
  return (
    <div>
      <h1>todolist</h1>
      <input
        type="text"
        placeholder="enter the list of items"
        value={input}
        onChange={inputEvent}
      />
      <button onClick={listOfItems}>add</button>
      {list.map((currEle) => {
        return <List text={currEle} />;
      })}
    </div>
  );
};
