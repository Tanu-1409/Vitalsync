import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="cards">
        <div className="card">Total Users: 150</div>
        <div className="card">Avg Steps Today: 6,200</div>
        <div className="card">System Status: ✅</div>
        <div className="card">API Calls Today: 1,200</div>
      </div>
    </div>
  );
};

export default AdminDashboard;