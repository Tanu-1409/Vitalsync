import React from "react";
import "./Goals.css";

const Goals = () => {
  return (
    <div className="goals-container">
      <div className="goals-form">
        <h2>Set Your Daily Goals</h2>
        <input type="number" placeholder="Steps (e.g., 10000)" />
        <input type="number" placeholder="Sleep (hours)" />
        <input type="number" placeholder="Hydration (litres)" />
        <input type="number" placeholder="Heart Rate Target (bpm)" />
        <button>Save Goals</button>
      </div>
    </div>
  );
};

export default Goals;