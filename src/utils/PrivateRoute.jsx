import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
//import AuthContext from "../context/AuthContext";
const PrivateRoute = ({ children }) => {
  console.log("Private route works");
  const isAuthenticated = false;

  if (isAuthenticated) {
    return children;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
