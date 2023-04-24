import React from "react";
import Navbar from "./assets/components/Navbar";
import Login from "./assets/components/Login";
import Register from "./assets/components/Register";
import Settings from "./assets/components/Settings";
import PrivateRoute from "./assets/components/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/components/axiosInstance";
import "./App.css";
function App() {
  //Still need to fix the jwt system to refresh/redirect properly for expired web tokens

  //Before I create a solution to fix the jwt problem, clear the
  //localStorage once a day and log back in to get a new session token

  //localStorage.removeItem("jwt");
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/settings/:id"
          element={<PrivateRoute component={Settings} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
