import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ChatPage } from "./components/ChatPage";
export const Main = () => {
  return (
    <>
      <Router>
        <div className="Main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatpage" element={<ChatPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
