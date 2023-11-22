import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Register from "./components/Register";
import { Home } from "./components/Home";
import "./App.css";
import "./components/NavLinkStyle.css";

function App() {
  return (
    <Router>
      <div className="nav-container">
        <nav>
          <NavLink className="item" to="/" activeClassName="active" end>
            Home
          </NavLink>
          <NavLink className="item" to="/register" activeClassName="active">
            Register
          </NavLink>
          <NavLink className="item" to="/login" activeClassName="active">
            Login
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
