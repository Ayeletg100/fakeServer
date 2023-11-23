import React, { useEffect, useMemo } from "react";
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
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Todo from "./components/Todo";
import Info from "./components/Info";
import NewPost from "./components/NewPost";
import PostDetail from "./components/PostDetail";
import { PostsProvider } from "./context/PostsContext";
function App() {
  const local = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <Router>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />}>
            <Route path="todos" element={<Todos />} />
            <Route path="info" element={<Info />} />
            <Route path="todos/newtodo" element={<Todo />} />
            <Route path="posts" element={<Posts />}>
              <Route path=":id" element={<PostDetail />} />
              <Route path="new" element={<NewPost />} />
            </Route>
          </Route>
        </Routes>
      </PostsProvider>
    </Router>
  );
}

export default App;
