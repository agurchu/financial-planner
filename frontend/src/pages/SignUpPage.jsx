import React, { useEffect }  from "react";
import SignUp from "../components/SignUp/SignUp.jsx";

import { useNavigate } from "react-router-dom";

export default function SignupPage() {
//   const { isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    // if (isAuthenticated === true) {
    //   navigate("/");
    // }
    navigate("/")
  }, []);
  return (
    <div>
      <SignUp />
    </div>
  );
}

