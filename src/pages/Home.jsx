import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export default function Home() {

    const { isLoggedIn } = useContext(AuthContext);
    return (
        <div className="home">
        <h2>Welcome to Task Manager</h2>
        {isLoggedIn && <Link to="/tasks">Check out your tasks</Link>}
        </div>
    )
};