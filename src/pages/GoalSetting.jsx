// src/pages/GoalSetting.jsx
import React from "react";
import "./GoalSetting.css";

const goals = [
  {
    emoji: "🚶‍♀",
    title: "Daily Steps",
    target: "10,000 steps",
    status: "7,500 steps done",
    color: "#3b82f6"
  },
  {
    emoji: "💧",
    title: "Water Intake",
    target: "2.5 Liters",
    status: "1.8 Liters logged",
    color: "#06b6d4"
  },
  {
    emoji: "❤",
    title: "Heart Health",
    target: "Resting HR < 80 bpm",
    status: "Current: 76 bpm",
    color: "#ef4444"
  },
  {
    emoji: "🛌",
    title: "Sleep",
    target: "8 hours/night",
    status: "6.5 hours logged",
    color: "#6366f1"
  },
];

const GoalSetting = () => {
  return (
    <div className="goals-container">
      <h2 className="goals-title">🎯 Your Health Goals</h2>
      <p className="goals-subtitle">Track, Update & Stay Consistent 💪</p>

      <div className="goals-grid">
        {goals.map((goal, index) => (
          <div className="goal-card" key={index} style={{ borderColor: goal.color }}>
            <div className="goal-emoji">{goal.emoji}</div>
            <h3 className="goal-title">{goal.title}</h3>
            <p className="goal-target">🎯 Target: {goal.target}</p>
            <p className="goal-status">📊 {goal.status}</p>
            <button className="update-btn" style={{ backgroundColor: goal.color }}>
              Update Progress
            </button>
          </div>
        ))}
      </div>

      <footer className="goals-footer">
        “Small steps every day lead to big changes tomorrow.” 🌱
      </footer>
    </div>
  );
};

export default GoalSetting;