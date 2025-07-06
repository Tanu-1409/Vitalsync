import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Welcome Back 👋</h2>
        <p>Please log in to your account</p>

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;