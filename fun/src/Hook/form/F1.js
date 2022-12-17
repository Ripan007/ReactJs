import React, { useState } from "react";

export const F1 = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [allData, setData] = useState([]);

  function submit(e) {
    e.preventDefault();
    const newEntry = { mail: mail, pasword: password };
    setData([...allData, newEntry]);
    setMail("");
    setPassword("");
  }

  function clearAll() {
    setData([]);
  }

  // ! not woring i need to work more
  function empty(id) {
    const newList = allData.filter((index) => {
      return id !== index;
    });
    setData(newList);
  }
  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="emil">email:</label>
        <input
          type="email"
          placeholder="enter your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      <>
        {allData.map((currEle, index) => {
          return (
            <p key={index}>
              {" "}
              {currEle.mail} {currEle.password}
              <button onClick={() => empty(index)}>empty</button>
            </p>
          );
        })}
        <button onClick={clearAll}> clearAll</button>
      </>
    </>
  );
};

// * task
// *  creating two input field => email, password
// * read data dynamically
// * print those data
// * delete all the data
// * delete one by one
