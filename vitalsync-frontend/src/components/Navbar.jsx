import React from "react";
import { Link } from "react-router-dom";
import Notifications from "./Notifications";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">VitalSync</h2>
      </div>
      <ul className="navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Notifications /></li>
      </ul>
    </nav>
  );
};

export default Navbar;