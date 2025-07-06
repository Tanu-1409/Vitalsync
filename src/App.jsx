// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Goals from "./pages/GoalSetting";
import Notifications from "./components/Notifications";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
    </Routes>
  );
};

export default App;