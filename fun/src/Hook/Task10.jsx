import React, { useState, useEffect } from "react";

export const Task10 = () => {
  const [width, countWidth] = useState(window.screen.width);

  const actualWidth = () => {
    countWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("add event");
    window.addEventListener("resize", actualWidth);
    return () => {
      console.log("remove");
      window.removeEventListener("resize", actualWidth);
    };
  });

  return <div>{width}</div>;
};
