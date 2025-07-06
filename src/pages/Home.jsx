// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container" style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(to right, #a1c4fd, #c2e9fb)", 
      padding: "3rem 1rem", 
      textAlign: "center", 
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1e3a8a" }}>
        VitalSync – Your Wellness, Connected 💙
      </h1>
      <p style={{ fontSize: "1.1rem", marginTop: "1rem", color: "#1f2937" }}>
        Track your health goals, visualize progress, and sync with smart devices — all in one place.
      </p>

      <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        {[
          { icon: "🏃‍♀", label: "Activity Tracking" },
          { icon: "💧", label: "Hydration Logs" },
          { icon: "🛌", label: "Sleep Monitor" },
          { icon: "❤", label: "Heart Rate" },
          { icon: "📈", label: "Health Graphs" },
          { icon: "🔒", label: "Secure Access" },
        ].map((item, index) => (
          <div key={index} style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "1.5rem",
            minWidth: "200px",
            transition: "transform 0.3s ease",
            fontSize: "1.2rem"
          }}>
            <div style={{ fontSize: "2rem" }}>{item.icon}</div>
            <div style={{ marginTop: "0.5rem", fontWeight: "600", color: "#374151" }}>{item.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "3rem" }}>
        <Link to="/login">
          <button style={{
            background: "#2563eb",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s ease"
          }}>
            Get Started
          </button>
        </Link>
      </div>

      <footer style={{ marginTop: "4rem", color: "#4b5563", fontSize: "0.9rem" }}>
        © 2025 VitalSync. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;