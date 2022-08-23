import Button from "@mui/material/Button";
import { useState } from "react";
import Signin from "../Signin/Signin";

interface LoginPageSendButtonProps {
  isAllowedToSignIn: boolean;
  email: string;
  password: string;
  isSignUp: boolean;
}

export default function LoginPageSendButton(props: LoginPageSendButtonProps) {
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
        onClick={() =>
          props.isSignUp ? setLabel("Signing up...") : setLabel("Signing in...")
        }
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
      {label === "Signing up..." && (
        <Signin
          setLabel={setLabel}
          email={props.email}
          password={props.password}
        />
      )}
    </>
  );
}
