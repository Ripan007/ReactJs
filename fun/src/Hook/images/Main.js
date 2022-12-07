import React from "react";
import image from "./image";

export const Main = () => {
  return (
    <div>
      {image.map((currEle, id) => {
        return <img key={id} src={currEle.imageUrl} />;
      })}
    </div>
  );
};
