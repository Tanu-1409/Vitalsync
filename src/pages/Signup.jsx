import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Left Side - Info Panel */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(to bottom right, #a8edea, #fed6e3)",
          color: "#1e3a8a",
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          🌿 Your Health, Your Rhythm
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "1.2rem",
            lineHeight: "2.2rem",
          }}
        >
          <li>💓 Track heart, steps, sleep & hydration</li>
          <li>🎯 Set smart goals and stay reminded</li>
          <li>🔗 Sync with Fitbit, Apple Health & more</li>
        </ul>
        <p
          style={{
            marginTop: "2rem",
            fontStyle: "italic",
            color: "#4b5563",
          }}
        >
          Join the <strong>VitalSync</strong> family today 😊
        </p>
      </div>

      {/* Right Side - Signup Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "2rem",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "1rem",
              color: "#065f46",
              textAlign: "center",
            }}
          >
            Welcome to <span style={{ color: "#14b8a6" }}>VitalSync</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#6b7280",
            }}
          >
            Sign up to begin your wellness journey 💙
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email Address"
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              style={inputStyle}
            />
            <button style={buttonStyle}>Sign Up</button>
          </form>
          <p
            style={{
              marginTop: "1rem",
              textAlign: "center",
              fontSize: "0.9rem",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#0f766e",
                fontWeight: "500",
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  marginBottom: "1rem",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "1rem",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  backgroundColor: "#14b8a6",
  color: "white",
  padding: "0.75rem",
  borderRadius: "999px",
  border: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background 0.3s ease",
};

export default Signup;