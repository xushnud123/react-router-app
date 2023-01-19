import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true }); 
  };
  return (
    <div>
      <label>
        Username:{" "}
        <input
          type='text'
          value={user}
          required
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button type='button' onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
};
