import React, { useContext } from "react";
import { name } from "./Parent";
export const CompC = () => {
  const response = useContext(name);
  return (
    <div>
      CompC
      <h1>{response}</h1>
    </div>
  );
};
