import LoginPageLogo from "./login-page/login-page-logo/LoginPageLogo";
import LoginPageExternalAuthButtons from "./login-page/login-page-external-auth-buttons/LoginPageExternalAuthButtons";
import LoginPageFields from "./login-page/login-page-fields/LoginPageFields";
import RegisterPageFields from "./login-page/login-page-signup/LoginPageSignup";
import LoginPagefooter from "./login-page/login-page-footer/LoginPagefooter";
import LoginPageOptions from "./login-page/login-page-options/LoginPageOptions";
import LoginPageSendButton from "./login-page/login-page-send-button/LoginPageSendButton";
import LoginPageSignInSignUp from "./login-page/login-page-sign-in-sign-up/LoginPageSignInSignUp";
import { useState } from "react";

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div>
      <br></br>
      <LoginPageLogo />
      <LoginPageSignInSignUp isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
      {isSignIn ? <LoginPageFields /> : <RegisterPageFields /> }
      <LoginPageOptions />
      <LoginPageSendButton />
      <LoginPageExternalAuthButtons />
      <LoginPagefooter />
    </div>
  );
}
