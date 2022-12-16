import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
    </div>
  );
};
