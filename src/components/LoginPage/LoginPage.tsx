import LoginPageSendButton from "../LoginPageSendButton/LoginPageSendButton";
import LoginPageOptions from "../LoginPageOptions/LoginPageOptions";
import "./loginPageSignInSignUp.css";
import LoginPageSignInSignUpStyle from "./LoginPageSignInSignUpStyle";
import NeurobicaLogo from "../NeurobicaLogo/NeurobicaLogo";
import BadgeIcon from "@mui/icons-material/Badge";
import Locked from "@mui/icons-material/Lock";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { Email, Lock } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Signin from "../Signin/Signin";

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAllowedToSignIn, setSsAllowedToSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [label, setLabel] = useState<string>("Continue");

  const [state, setState] = useState<{
    checkedA: boolean;
    checkedB: boolean;
    checkedF: boolean;
    checkedG: boolean;
  }>({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state2, setState2] = useState<{
    checkedA: boolean;
    checkedB: boolean;
    checkedF: boolean;
    checkedG: boolean;
  }>({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 1 }}
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
        <div className="loginPageSignInSignUp">
          <ToggleButtonGroup value={isSignIn}>
            <ToggleButton
              onClick={() => {
                setIsSignIn(true);
              }}
              sx={
                isSignIn
                  ? LoginPageSignInSignUpStyle.selected
                  : LoginPageSignInSignUpStyle.unselected
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
                  ? LoginPageSignInSignUpStyle.unselected
                  : LoginPageSignInSignUpStyle.selected
              }
              value="signup"
            >
              Sign Up
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {isSignIn ? (
          <Box
            component="form"
            sx={{
              m: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                sx={{
                  m: 0,
                  width: "40vh",
                }}
                error={false}
                id="sandard-basic"
                variant="standard"
                type="email"
                label="Email Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                value={email}
                placeholder="Enter Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <br />
            <div>
              <TextField
                sx={{
                  m: 0,
                  width: "40vh",
                }}
                error={false}
                id="tandard-basic"
                variant="standard"
                type="password"
                label="Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
                value={password}
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </Box>
        ) : (
          <Box
            component="form"
            sx={{
              m: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                sx={{
                  m: 0,
                  width: "40vh",
                }}
                error={false}
                type="email"
                variant="standard"
                label="Email Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                value={email}
                placeholder="Enter Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <br />

            <div>
              <TextField
                sx={{
                  m: 0,
                  width: "40vh",
                }}
                error={false}
                type="text"
                variant="standard"
                label="Full Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeIcon />
                    </InputAdornment>
                  ),
                }}
                value={fullName}
                placeholder="Enter Your Full Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <br />
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={false}
              type="password"
              variant="standard"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Locked />
                  </InputAdornment>
                ),
              }}
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />

            <div>
              <TextField
                sx={{
                  m: 0,
                  width: "40vh",
                }}
                error={false}
                type="confirm password"
                variant="standard"
                label="Confirm Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Locked />
                    </InputAdornment>
                  ),
                }}
                value={passwordAgain}
                placeholder="Confirm Your Password"
                onChange={(e) => {
                  setPasswordAgain(e.target.value);
                }}
              />

              <Grid container>
                <Grid item>
                  {" "}
                  <br />
                  <FormControlLabel
                    label={
                      <div>
                        <span>I accept the </span>
                        <Link to={"/termsvf"}>
                          terms of use and privacy policy
                        </Link>
                      </div>
                    }
                    sx={{
                      color: "GrayText",
                      width: "35vh",
                    }}
                    control={
                      <Checkbox
                        sx={{
                          fontSize: "28",
                        }}
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="default"
                        size="small"
                      />
                    }
                  />
                </Grid>
              </Grid>
            </div>
          </Box>
        )}
      </Grid>
      <Grid item xs={4} sx={{ padding: "0vh" }}>
        <Grid container>
          <Grid item>
            <FormControlLabel
              label="Rememmber Me"
              sx={{
                color: "GrayText",
                width: "25vh",
              }}
              control={
                <Checkbox
                  sx={{
                    fontSize: "28",
                  }}
                  checked={state2.checkedB}
                  onChange={handleChange2}
                  name="checkedB"
                  color="default"
                  size="small"
                />
              }
            />
          </Grid>
          <Grid item alignSelf="center">
            <div className="text">
              <a
                href="src/components/ForgotPassword/ForgotPassword"
                style={{ color: "#FF8B17" }}
              >
                Trouble Logging In?
              </a>
            </div>
          </Grid>
        </Grid>
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
        <Button
          disabled={!isAllowedToSignIn}
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
          <Signin setLabel={setLabel} email={email} password={password} />
        )}
      </Grid>
    </Grid>
  );
}
