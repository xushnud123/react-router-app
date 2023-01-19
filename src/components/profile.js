import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/" );
  };
  return (
    <div>
      <h1>Welcome {auth.state}</h1>
      <button type='button' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
