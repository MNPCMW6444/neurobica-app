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
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div>
      <Grid
        container
        spacing={{ xs: 4, md: 1 }}
        columns={{ xs: 4, md: 4 }}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <NeurobicaLogo />
        </Grid>
        <Grid item xs={4}>
          <LoginPageSignInSignUp
            isSignIn={isSignIn}
            setIsSignIn={setIsSignIn}
          />
          {isSignIn ? <LoginPageFields /> : <RegisterPageFields />}
        </Grid>
        <Grid item xs={4}>
          <LoginPageOptions />
        </Grid>
        <Grid item xs={4}>
          <GoogleReCaptchaProvider reCaptchaKey="6LcrTYUhAAAAALcocJuPUztaWEIAsY_DdAuRxx8b">
            <GoogleReCaptcha onVerify={() => {}} />
          </GoogleReCaptchaProvider>
        </Grid>
        <Grid item xs={4}>
          <LoginPageSendButton />
        </Grid>
        <Grid item xs={4}>
          <LoginPageExternalAuthButtons />
        </Grid>
        <Grid item xs={4}>
          <LoginPagefooter />
        </Grid>
      </Grid>
    </div>
  );
}
