import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.state) {
    console.log(auth.state);
    return (
      <Navigate
        to='/login'
        state={{ path: location.pathname }}
        replace={true}
      />
    );
  }
  return children;
};
