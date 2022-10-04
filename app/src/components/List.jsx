import React from "react";
import pi, { doublePi, triplePi } from "../pi";
import calculator, { add, substract, multiply } from "../calculator";
// import * as pi from "../pi";

function List() {
  return (
    <div>
      <ul>
        <li>{pi}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>
      </ul>
      <ul>
        <li>{add(2, 3)}</li>
        <li>{substract(4, 5)}</li>
        <li>{multiply(6, 7)}</li>
      </ul>
    </div>
  );
}

export default List;
