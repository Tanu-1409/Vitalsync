// src/pages/Notifications.jsx
import React from "react";
import "./Notifications.css";
import { Bell, CheckCircle, HeartPulse, Flame } from "lucide-react";

const notifications = [
  {
    icon: <HeartPulse color="#ef4444" size={28} />,
    message: "High heart rate detected! Take a rest. 💓",
  },
  {
    icon: <CheckCircle color="#10b981" size={28} />,
    message: "Goal completed! You hit 10k steps today 🎉",
  },
  {
    icon: <Flame color="#f59e0b" size={28} />,
    message: "Stay hydrated 💧 - Only 2 glasses left to complete your goal!",
  },
  {
    icon: <Bell color="#3b82f6" size={28} />,
    message: "Reminder: Log your sleep before midnight 😴",
  },
];

const Notifications = () => {
  return (
    <div className="notification-page">
      <h2 className="noti-heading">🔔 Your Health Updates</h2>
      <div className="noti-list">
        {notifications.map((note, index) => (
          <div key={index} className="noti-card">
            <div className="noti-icon">{note.icon}</div>
            <div className="noti-message">{note.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;