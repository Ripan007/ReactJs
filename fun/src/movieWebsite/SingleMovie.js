import React from "react";
import { useParams } from "react-router-dom";

export const SingleMovie = () => {
  const { id } = useParams();
  return (
    <>
      <h1> get single movie {id} </h1>
    </>
  );
};
