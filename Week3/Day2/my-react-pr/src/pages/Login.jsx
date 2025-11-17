import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("loggedIn", "true");

        navigate("/dashboard");
    };

    return (
        <div style={{
        width:"100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
            <div> 
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}