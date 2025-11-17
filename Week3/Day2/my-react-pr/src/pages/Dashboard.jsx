import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard(){
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>

        <h1>Dashboard</h1>

        <div style={{ marginTop: "20px", marginBottom: "30px" }}>
          <Link
            to="counter"
            style={{ marginRight: "20px", fontSize: "18px" }}
          >
            Go to Counter
          </Link>

          <Link
            to="watch"
            style={{ fontSize: "18px" }}
          >
            Go to Digital Watch
          </Link>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <Outlet />
        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
