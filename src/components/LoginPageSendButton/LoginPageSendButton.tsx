import Button from "@mui/material/Button";
import { useState } from "react";
import Signin from "../Signin/Signin";

export default function LoginPageSendButton(props: {
  isAllowedToSignIn: boolean;
  email: string;
  password: string;
}) {
  const [label, setLabel] = useState<string>("Sign In");

  return (
    <>
      <Button
        disabled={!props.isAllowedToSignIn}
        color="inherit"
        variant="outlined"
        sx={{
          color: "#FF8B17",
          width: "45vh",
          height: "6vh",
          borderRadius: "30px",
        }}
        onClick={() => setLabel("Signing in...")}
      >
        {label}
      </Button>
      {label === "Signing in..." && (
        <Signin
          setLabel={setLabel}
          email={props.email}
          password={props.password}
        />
      )}
    </>
  );
}
