import React, { useState } from "react";

export const P6 = () => {
  const [data, setData] = useState("jjjj");
  return (
    <div>
      <h1>
        {data || (
          <>
            <p>welcome to shortCircuit</p>
            <h2>coding is fun</h2>
          </>
        )}
      </h1>
      <h1>
        {data && (
          <>
            <p>welcome to testing shortCircuit</p>
          </>
        )}
      </h1>
    </div>
  );
};

// ! shortCircuit evaluation => we can do multiple render
