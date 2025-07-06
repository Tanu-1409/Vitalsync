// src/pages/Profile.jsx
import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://cdn.pixabay.com/photo/2021/01/28/10/38/woman-5957542_1280.png" // प्यारी सी girl avatar
          alt="Profile"
          className="profile-image"
        />
        <h2 className="profile-name">Tanu Mishra</h2>
        <p className="profile-email">tanu.mishra@email.com</p>

        <div className="profile-details">
          <div>
            <strong>Age:</strong> 21
          </div>
          <div>
            <strong>Height:</strong> 165 cm
          </div>
          <div>
            <strong>Weight:</strong> 55 kg
          </div>
          <div>
            <strong>Fitness Goal:</strong> Stay Active & Hydrated 💪💧
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;