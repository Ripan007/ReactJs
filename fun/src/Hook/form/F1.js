import React, { useState } from "react";

export const F1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allentry, setallentry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setallentry([...allentry, newEntry]);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="email">email:</label>
        <br />
        <input
          type="email"
          placeholder="enter  the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">password:</label>
        <br />
        <input
          type="password"
          placeholder="enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">login</button>
      </form>
      <>
        {allentry.map((currEle, index) => {
          return (
            <p key={index}>
              {" "}
              {currEle.email} {currEle.password}{" "}
            </p>
          );
        })}
      </>
    </>
  );
};
