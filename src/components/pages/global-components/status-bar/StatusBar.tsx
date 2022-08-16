import Button from "@mui/material/Button";
import React from "react";
import LoginPage from "../../my-account/auth/LoginPage";
import LoginStatus from "./status-components/login-status/LoginStatus";
import "./statusBar.css";

export default function StatusBar() {
  return (
    <>
    <div className="statusBar">
      Subscribe Now! Get 15% Discount On Nurobica's Brain supplements
      <div>
        <LoginStatus />
        <Button variant="outlined" href="../../my-account/auth/LoginPage" >

        Login
      </Button>
      </div>
    </div>

      
      </>
  );
}
