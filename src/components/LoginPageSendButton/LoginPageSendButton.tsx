import Button from "@mui/material/Button";
import { useState } from "react";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

interface LoginPageSendButtonProps {
  isAllowedToSignIn: boolean;
  email: string;
  fullname: string;
  password: string;
  passwordagain: string;
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
        <Signup
          setLabel={setLabel}
          email={props.email}
          password={props.password}
          fullname={props.fullname}
          passwordagain={props.passwordagain}
        />
      )}
    </>
  );
}
