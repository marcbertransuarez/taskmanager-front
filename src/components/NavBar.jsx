import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
      <nav className="general-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={isLoggedIn ? "/tasks" : "/login"}>Your Tasks</NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                onClick={() => {
                  logOutUser();
                }}
              >
                Log out
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
  );
}
