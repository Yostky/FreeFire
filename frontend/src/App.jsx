import React from "react";
import Navbar from "./assets/components/Navbar";
import Login from "./assets/components/Login";
import Register from "./assets/components/Register";
import Main from "./assets/components/Main";
import PrivateRoute from "./assets/components/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/components/axiosInstance";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<PrivateRoute component={Main} />} />
      </Routes>
    </Router>
  );
}

export default App;
