import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Posts from "./components/Posts";

const App2 = () => {
  return (
    <Router>
      <Posts />
    </Router>
  );
};

export default App2;
