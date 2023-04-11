import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = localStorage.getItem("jwt");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default PrivateRoute;
