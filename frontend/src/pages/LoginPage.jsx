import React, { useEffect } from "react";
import Login from "../components/Login/Login.jsx";

import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  // const { isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    // if (isAuthenticated === true) {
    // }
    navigate("/login");
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}