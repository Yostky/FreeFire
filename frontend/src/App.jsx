import React from "react";
import Navbar from "./assets/components/Navbar";
import Login from "./assets/components/Login";
import Register from "./assets/components/Register";
import Profile from "./assets/components/Profile";
import PrivateRoute from "./assets/components/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/components/axiosInstance";
import "./App.css";
function App() {
  // localStorage.removeItem("jwt");
  // console.log(localStorage);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile/:id"
          element={<PrivateRoute component={Profile} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
