import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="#f472b6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
          </svg>
        </div>
        <h2 className="profile-name">Tanu</h2>
        <p className="profile-email">tanu@example.com</p>

        <div className="profile-details">
          <h3>Preferences</h3>
          <ul>
            <li><strong>Notifications:</strong> Enabled</li>
            <li><strong>Units:</strong> Metric</li>
            <li><strong>Theme:</strong> Light</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;