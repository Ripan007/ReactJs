import React from "react";
import { Home } from "./Router6/Pages/Home";
import { Login } from "./Router6/Pages/Login";
import { Profile } from "./Router6/Pages/Profile";
import { PageNotFound } from "./Router6/Pages/PageNotFound";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Router6/Pages/Header";
import { User } from "./Router6/Pages/User";

export const App = () => {
  return (
    <div className="app">
      <h1>main router page</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="Profile/*" element={<Profile />}>
          {/* <Route
            path="profile1"
            element={<div>welcome to profile first</div>}
          />
          <Route
            path="profile2"
            element={<div>welcome to profile second</div>}
          />
          <Route
            path="profile3"
            element={<div>welcome to profile third</div>}
          /> */}
        </Route>
        <Route path="*" element={<div>page not found</div>} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
};
