import React from "react";
import { Navigate } from "react-router-dom";


const getUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role;
  } catch (error) {
    return null;
  }
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("No token found");
    return <Navigate to="/login" replace />;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    console.log("Role from JWT:", payload.role);
    if (payload.role !== "admin") {
      console.log("User is not an admin");
      return <Navigate to="/login" replace />;
    }

  } catch (error) {
    console.error("Error decoding token:", error);
    return <Navigate to="/login" replace />;
  }

  return children;
};


export default ProtectedRoute;
