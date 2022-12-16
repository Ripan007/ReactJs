import React from "react";
import { useParams } from "react-router-dom";

export const User = () => {
  const userParams = useParams();
  console.log(userParams);
  const userData = [
    { id: "100", name: "janvi", age: "23" },
    { id: "101", name: "komal", age: "24" },
  ];

  let user;
  user = userData.find((user) => user.id === userParams.id);
  if (!user) {
    user = {
      name: "default",
      age: "default",
    };
  }
  return (
    <div>
      User Details
      <p>{user.name}</p>
      <p>{user.age}</p>
    </div>
  );
};
