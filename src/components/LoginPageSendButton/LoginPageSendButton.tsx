import Button from "@mui/material/Button";
import { borderColor } from "@mui/system";
import React from "react";

export default function LoginPageSendButton() {
  return <div>
    <Button color="inherit"
            variant="outlined"
            href="../../my-account/auth"
            sx={{
            color: "#FF8B17",
            width:"45vh",
            height:"6vh",
            borderRadius:"30px"

            }}>Login</Button>
  </div>;
}
