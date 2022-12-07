import React, { useState, useEffect } from "react";

export const Task11 = () => {
  const [data, setData] = useState([]);
  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    setData(await response.json());
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      {data.map((ele) => {
        return <p>{ele.id}</p>;
      })}
    </div>
  );
};
