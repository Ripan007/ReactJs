import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { SingleMovie } from "./SingleMovie";
import { PageNotFound } from "./PageNotFound";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

// ! use  :id => dynamically change the id
// ! * used for => page not exist
// ! useParams we get the path
// ? with the use of {useParams} we get the id
// ? context api => allow us to access data at diff level of component tree , without passing  props to every level
// ? create context , provider , consumer
// ? useContext
