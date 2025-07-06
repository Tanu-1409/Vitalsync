// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#e0f2fe", display: "flex", justifyContent: "space-around" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/goals">Goals</Link>
      <Link to="/notifications">Notifications</Link>
    </nav>
  );
};

export default Navbar;