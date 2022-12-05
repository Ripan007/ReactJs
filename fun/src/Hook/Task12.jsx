import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { AiFillAccountBook } from "react-icons/ai";

export const Task12 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setLoading(false);
      setData(await response.json());
    } catch (error) {
      console.log("getting error:" + error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {data.map((ele) => {
        // arrays destructing
        const { id } = ele;
        return (
          <p>
            {id} <AiFillAccountBook />
          </p>
        );
      })}
    </div>
  );
};
