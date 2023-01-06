import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import LoginPage from "../Auth/Auth";
import StatusBar from "../StatusBar/StatusBar";

export default function MyAccount() {
  let { user } = useContext(UserContext);

  return (
    <>
      {" "}
      <div
        style={{
          height: "5%",
          width: "100%",
          position: "fixed",
          top: "0px",
        }}
      >
        <StatusBar />
      </div>
      {user ? <div>Hi {user.fullname + "!!!"}</div> : <LoginPage />}
    </>
  );
}
