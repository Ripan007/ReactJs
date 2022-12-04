import React from "react";
import "./Sidebar.css";
import TollIcon from "@mui/icons-material/Toll";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-img">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/28/13/14/cat-6664412_1280.jpg"
            alt="cat"
          />
        </div>
        <div className="sidebar-header-btn">
          <TollIcon />
          <InsertCommentIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-input">
          <SearchIcon />
          <input type="text" name="search" placeholder="Search.." />
        </div>
      </div>
    </div>
  );
};
