import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import "./loginPageSignInSignUp.css";
import LoginPageSignInSignUpStyle from "./LoginPageSignInSignUpStyle";

export default function LoginPageSignInSignUp(props: {
  isSignIn: boolean;
  setIsSignIn: Function;
}) {
  return (
    <div className="loginPageSignInSignUp">
      <ToggleButtonGroup
        value={props.isSignIn}
        /* onChange={(event, newAlignment) => {
          setIsSignIn(newAlignment);
        }}
        exclusive */
      >
        <ToggleButton
          onClick={() => {
            props.setIsSignIn(true);
          }}
          sx={
            props.isSignIn
              ? LoginPageSignInSignUpStyle.selected
              : LoginPageSignInSignUpStyle.unselected
          }
          value="signin"
        >
          Sign In
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            props.setIsSignIn(false);
          }}
          sx={
            props.isSignIn
              ? LoginPageSignInSignUpStyle.unselected
              : LoginPageSignInSignUpStyle.selected
          }
          value="signup"
        >
          Sign Up
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
