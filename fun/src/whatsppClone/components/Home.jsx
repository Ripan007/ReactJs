import React from "react";
import { Sidebar } from "./Sidebar";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        {/* sidebar */}
        <Sidebar />
        {/* sidebar with whatsapp logo */}
      </div>
    </div>
  );
};
