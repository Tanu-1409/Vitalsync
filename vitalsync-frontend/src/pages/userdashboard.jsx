import React from "react";
import "./UserDashboard.css";
import { FaWalking, FaBed, FaTint, FaHeartbeat } from "react-icons/fa";

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome, User</h2>
      <div className="metrics-grid">
        <div className="metric-card steps">
          <FaWalking className="icon" />
          <p>Steps</p>
          <h3>8500</h3>
        </div>
        <div className="metric-card sleep">
          <FaBed className="icon" />
          <p>Sleep</p>
          <h3>7 hrs</h3>
        </div>
        <div className="metric-card hydration">
          <FaTint className="icon" />
          <p>Hydration</p>
          <h3>2.5 L</h3>
        </div>
        <div className="metric-card heart">
          <FaHeartbeat className="icon" />
          <p>Heart Rate</p>
          <h3>78 bpm</h3>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;