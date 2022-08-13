import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import "./loginPageSignInSignUp.css";
import loginPageToggleButton from "./loginPageToggleButton";

export default function LoginPageSignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="loginPageSignInSignUp">
      <ToggleButtonGroup
        value={isSignIn}
        /* onChange={(event, newAlignment) => {
          setIsSignIn(newAlignment);
        }}
        exclusive */
      >
        <ToggleButton
          onClick={() => {
            setIsSignIn(true);
          }}
          sx={
            isSignIn
              ? loginPageToggleButton.selected
              : loginPageToggleButton.unselected
          }
          value="signin"
        >
          Sign In
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            setIsSignIn(false);
          }}
          sx={
            isSignIn
              ? loginPageToggleButton.unselected
              : loginPageToggleButton.selected
          }
          value="signup"
        >
          Sign Up
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
