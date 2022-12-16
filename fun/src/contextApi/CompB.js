import React, { useContext } from "react";
// import { CompC } from "./CompC";
import { FirstName, LastName } from "./App";

export const CompB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <h1>
      {fname} {lname}
    </h1>
  );
};
