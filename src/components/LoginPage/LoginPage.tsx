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
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAllowedToSignIn, setSsAllowedToSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid
      container
      spacing={{ xs: 4, md: 1 }}
      columns={{ xs: 4, md: 4 }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingTop="5%"
    >
      <Grid item xs={4}>
        <NeurobicaLogo c={5} />
      </Grid>
      <Grid item xs={4}>
        <LoginPageSignInSignUp isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        {isSignIn ? (
          <LoginPageFields
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        ) : (
          <RegisterPageFields />
        )}
      </Grid>
      <Grid item xs={4}>
        <LoginPageOptions />
      </Grid>
      <Grid item xs={4}>
        <GoogleReCaptchaProvider reCaptchaKey="6LcrTYUhAAAAALcocJuPUztaWEIAsY_DdAuRxx8b">
          <GoogleReCaptcha
            onVerify={() => {
              setSsAllowedToSignIn(true);
            }}
          />
        </GoogleReCaptchaProvider>
      </Grid>
      <Grid item xs={4}>
        <LoginPageSendButton
          isAllowedToSignIn={isAllowedToSignIn}
          email={email}
          password={password}
        />
      </Grid>
      <Grid item xs={4}>
        <LoginPageExternalAuthButtons />
      </Grid>
      <Grid item xs={4}>
        <LoginPagefooter />
      </Grid>
    </Grid>
  );
}
