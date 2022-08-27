import "./loginStatus.css";
import useUser from "../../hooks/useUser";
import { useState } from "react";
import SignedIn from "../SignedIn/SignedIn";

export default function LoginStatus() {
  const [user, setUser] = useState<any>();

  return (
    <div className="loginStatus">
      {user ? "Welcome back " + user.fullname + "!" : <></>}
      <SignedIn setUser={setUser} />
    </div>
  );
}
