import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "./App.css";
import "./components/NavLinkStyle.css";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Todo from "./components/Todo";
import Info from "./components/Info";
function App() {
  const local = localStorage.getItem("currentUser");
  const logoutfromapp = () => {
    const navigate = useNavigate();
    navigate("/");
    localStorage.clear();
  };
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
          <NavLink className="item" to="/info" activeClassName="active">
            info
          </NavLink>
          <NavLink
            onClick={logoutfromapp}
            className="item log-out"
            activeClassName="active"
            to="/login"
          >
            Log Out
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink className="item" to="/" activeClassName="active" end>
            Login
          </NavLink>
          <NavLink className="item" to="/register" activeClassName="active">
            Register
          </NavLink>
        </>
      );
    }
  };

  return (
    <Router>
      <div className="nav-container">
        <nav>{routes()}</nav>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos/newtodo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
