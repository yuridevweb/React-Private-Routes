// import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      {user ? (
        <a className="logout" onClick={logoutUser}>
          Logout
        </a>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <span> | </span>
          <Link to="/register">Register</Link>
        </>
      )}

      {user && <p>{user.username} </p>}
    </div>
  );
};

export default Header;
