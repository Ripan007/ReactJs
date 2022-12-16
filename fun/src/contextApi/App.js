import React, { createContext } from "react";
import { CompA } from "./CompA";

const FirstName = createContext();
const LastName = createContext();
export const App = () => {
  return (
    <div>
      <FirstName.Provider value={"komal"}>
        <LastName.Provider value={"singh"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
};
export { FirstName, LastName };
