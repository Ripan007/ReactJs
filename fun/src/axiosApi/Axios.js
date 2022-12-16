import React, { useState, useEffect } from "react";
import axios from "axios";

export const Axios = () => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setName(res.data.name);
    }
    getData();
  });
  return (
    <>
      <h1>chosen id{id}</h1>
      <h1>chosen name is {name}</h1>
      <select
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>``
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </>
  );
};
