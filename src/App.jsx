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
import Todo from "./components/Todo";
import NewPost from "./components/NewPost";
import PostDetail from "./components/PostDetail";
import { PostsProvider } from "./context/PostsContext";
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

      <PostsProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/newtodo" element={<Todo />} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path=":id" element={<PostDetail />} />
            <Route path="new" element={<NewPost />} />
          </Route>
        </Routes>
      </PostsProvider>
    </Router>
  );
}

export default App;
