import React, { createContext } from "react";
import { CompA } from "./CompA";

export const name = createContext();

export const Parent = () => {
  return (
    <div>
      <h1>parent</h1>
      <name.Provider value={"ripan"}>
        <CompA />
      </name.Provider>
    </div>
  );
};
