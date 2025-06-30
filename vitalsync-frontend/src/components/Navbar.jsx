import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">VitalSync</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/goals">Goals</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;