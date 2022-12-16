import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { Profile1 } from "./Profile1";

export const Profile = () => {
  return (
    // ! take relative path  if we wont assign slash (infront of them)
    // ? opposite absolute path

    <div>
      <h1>profile</h1>
      <Outlet />
      <Link to="profile1">profile1</Link>
      <Link to="profile2">profile2</Link>
      <Link to="profile3">profile3</Link>

      <Routes>
        <Route path="profile1" element={<Profile1 />} />
        <Route path="profile2" element={<div> welcome to profile 2</div>} />
        <Route path="profile3" element={<div> welcome to profile 3</div>} />
      </Routes>
    </div>
  );
};
