import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "./App.css";
import "./components/NavLinkStyle.css";
import Posts from "./components/Posts";
import Todos from "./components/Todos";

function App() {
  const local = localStorage.getItem("currentUser");

  const routes = () => {
    if (local) {
      return (
        <>
          <NavLink className="item" to="/todos" activeClassName="active">
            Todos
          </NavLink>
          <NavLink className="item" to="/posts" activeClassName="active">
            posts
          </NavLink>
        </>
      );
    }
  };

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
          {routes()}
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
