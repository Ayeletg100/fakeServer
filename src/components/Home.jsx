import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./NavLinkStyle.css";
function Home() {
  return (
    <>
      <div className="nav-container">
        <nav>
          <NavLink className="item" to="todos" activeClassName="active">
            Todos
          </NavLink>
          <NavLink className="item" to="posts" activeClassName="active">
            posts
          </NavLink>
          <NavLink className="item" to="info" activeClassName="active">
            info
          </NavLink>
          <NavLink
            onClick={() => {
              const datadel = localStorage.removeItem("currentUser");
              useNavigate("/");
            }}
            className="item log-out"
            activeClassName="active"
            to="/"
          >
            Log Out
          </NavLink>
          <Outlet />
        </nav>
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
