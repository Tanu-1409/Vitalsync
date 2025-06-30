import React, { useState } from "react";
import { Bell } from "lucide-react";
import "./Notifications.css"; // custom styles (create this file if needed)

const Notifications = () => {
  const [open, setOpen] = useState(false);

  const dummyNotifications = [
    { id: 1, message: "Your step goal for today is pending!" },
    { id: 2, message: "New health tip: Stay hydrated!" },
    { id: 3, message: "Reminder: Log your sleep for better insights." },
  ];

  return (
    <div className="notification-wrapper">
      <div className="icon-container" onClick={() => setOpen(!open)}>
        <Bell size={22} />
        <span className="dot" />
      </div>

      {open && (
        <div className="dropdown">
          <h4>Notifications</h4>
          {dummyNotifications.length ? (
            dummyNotifications.map((note) => (
              <div key={note.id} className="dropdown-item">
                {note.message}
              </div>
            ))
          ) : (
            <p className="empty">No notifications</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;