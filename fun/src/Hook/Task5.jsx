import React, { useState } from "react";

export const Task5 = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [store, setStore] = useState([]);
  const submits = (e) => {
    e.preventDefault();
    const newArr = { name: name, password: password };
    setStore([...store, newArr]);
  };
  return (
    <div>
      <form onSubmit={submits}>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          placeholder="enter your name"
          value={name}
          autocomplete="off"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">password:</label>
        <input
          type="text"
          placeholder="Enter your password"
          value={password}
          autocomplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      {store.map((currEle) => {
        return (
          <p key={currEle.id}>
            {currEle.name} {currEle.password}
          </p>
        );
      })}
    </div>
  );
};
