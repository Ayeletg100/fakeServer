import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
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
            Login
          </NavLink>
          <NavLink className="item" to="/register" activeClassName="active">
            Register
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
