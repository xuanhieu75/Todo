import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todo">Todo App</NavLink>
      <NavLink to="/blog">Blog App</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Nav;
