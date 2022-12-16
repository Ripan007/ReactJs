import React from "react";
import ReactDOM from "react-dom/client";

// import { App } from "./movieWebsite/App";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./useEffect/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
