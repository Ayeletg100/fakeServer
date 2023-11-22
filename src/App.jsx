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
import Posts from "./components/Posts";
import Todos from "./components/Todos";

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
        <Route path="/todos" element={<Todos />} />
        <Route path="/posts/:id" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
