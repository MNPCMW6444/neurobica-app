import React from "react";
import "./loginStatus.css";
import useUser from "../../../../../../hooks/useUser";

export default function LoginStatus() {
  const [user] = useUser("loggedIn", {}, []);

  return (
    <div className="loginStatus">
      {user._id ? "Welcome back " + user.name + "!" : <button>Login</button>}
    </div>
  );
}
