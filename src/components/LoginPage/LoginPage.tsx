import LoginPageLogo from "../NeurobicaLogo/NeurobicaLogo";
import LoginPageExternalAuthButtons from "../LoginPageExternalAuthButtons/LoginPageExternalAuthButtons";
import LoginPageFields from "../LoginPageFields/LoginPageFields";
import LoginPagefooter from "../LoginPagefooter/LoginPagefooter";
import LoginPageSendButton from "../LoginPageSendButton/LoginPageSendButton";
import { useState } from "react";
import LoginPageOptions from "../LoginPageOptions/LoginPageOptions";
import LoginPageSignInSignUp from "../LoginPageSignInSignUp/LoginPageSignInSignUp";
import NeurobicaLogo from "../NeurobicaLogo/NeurobicaLogo";
import RegisterPageFields from "../LoginPageSignup/LoginPageSignup";
import Grid from "@mui/material/Grid";

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div>
      <br></br>
      <LoginPageLogo />
      {/*       <LoginPageSignInSignUp isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
       */}
      {isSignIn ? <LoginPageFields /> : /* <RegisterPageFields/> */ null}
      {/*       <LoginPageOptions />
       */}
      <LoginPageSendButton />
      <LoginPageExternalAuthButtons />
      <LoginPagefooter />
    </div>
  );
}
