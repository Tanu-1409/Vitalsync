import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Left Panel */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(to bottom right, #6cb3f7, #b3e5fc)",
          color: "#000000",
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: "3rem" }}>💙</span> Stay on Track with VitalSync
        </h2>

        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem", lineHeight: "2.2rem" }}>
          <li>📊 Monitor your vitals & goals</li>
          <li>📱 Sync with smart devices</li>
          <li>🔍 Get personalized insights</li>
        </ul>

        <p style={{ marginTop: "3rem", fontStyle: "italic", fontSize: "1rem", color: "#333" }}>
          Empowering your wellness journey, every step of the way 🌱
        </p>
      </div>

      {/* Right Panel - Login Form */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4rem 2rem",
        }}
      >
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
            Welcome Back
          </h2>
          <p style={{ fontSize: "0.95rem", marginBottom: "2rem" }}>
            Log in to continue tracking your health
          </p>

          <form>
            <input
              type="email"
              placeholder="Email Address"
              style={{
                width: "100%",
                padding: "0.9rem",
                marginBottom: "1rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "0.9rem",
                marginBottom: "1.5rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.9rem",
                backgroundColor: "#2196f3",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Log In
            </button>
          </form>

          <p style={{ fontSize: "0.9rem", marginTop: "2rem", textAlign: "center" }}>
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;