import React, { useState } from "react";

export const Task6 = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [store, setStore] = useState([]);
  const submits = (e) => {
    e.preventDefault();
    if (name && password) {
      const newArr = {
        id: new Date().getTime().toString(),
        name,
        password,
      };
      setStore([...store, newArr]);
      setName("");
      setPassword("");
    } else {
      alert("enter value");
    }
  };

  return (
    <div>
      <form onSubmit={submits}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">password:</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      {store.map((currEle) => {
        const { id, name, password } = currEle;
        return (
          <p key={id}>
            {name} {password}
          </p>
        );
      })}
    </div>
  );
};
