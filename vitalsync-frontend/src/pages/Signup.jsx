import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Create Account</h2>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Signup;