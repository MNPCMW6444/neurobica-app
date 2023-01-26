import "./authStyle.css";
import LoginPageSignInSignUpStyle from "./authStyle";
import NeurobicaLogo from "../NeurobicaLogo/NeurobicaLogo";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { passwordStrength } from "check-password-strength";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Signin from "../Signin/Signin";
import SignupReq from "../SignupReq/SignupReq";
import Badge from "@mui/icons-material/Badge";
import Lock from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import SignupFin from "../SignupFin/SignupFin";
import { YoadButn } from "../../YoadButn";
export default function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAdvanced, setIsAdvanceed] = useState(false);
  const [isAllowedToSignIn, setSsAllowedToSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordagain, setPasswordagain] = useState("");
  const [label, setLabel] = useState<string>(
    isSignIn ? "Sign In" : "Continiue"
  );

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
    setState2({ ...state, [event.target.name]: event.target.checked });
  };

  const emailValidation =
    email.includes("+") ||
    !(
      email.includes("@") &&
      email.indexOf("@") !== 0 &&
      email.indexOf("@") !== email.length - 1
    );

  console.log(email.indexOf("@"));
  console.log(email.indexOf("@"));

  const passwordValidation =
    passwordStrength(password).value === "Strong" ||
    passwordStrength(password).value === "Medium";

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 1 }}
      columns={{ xs: 4, md: 4 }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingTop="5vh"
    >
      <Grid item xs={4}>
        <NeurobicaLogo c={5} />
      </Grid>
      <Grid item xs={4}>
        <Box className="loginPageSignInSignUp">
          <ToggleButtonGroup value={isSignIn}>
            <ToggleButton
              onClick={() => {
                setIsSignIn(true);
                setLabel("Sign In");
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
                setLabel("Continue");
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
        </Box>
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
            <Box>
              <TextField
                sx={{
                  m: 0,
                  width: "40vh",
                }}
                error={emailValidation && !!email}
                id="sandard-basic"
                variant="standard"
                type="email"
                label={
                  email.includes("+")
                    ? "Email Address mustn't include '+'"
                    : !(
                        email.includes("@") &&
                        email.indexOf("@") !== 0 &&
                        email.indexOf("@") !== email.length - 1
                      ) && !!email
                    ? "Email Address must include '@'"
                    : "Email Address"
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                value={email}
                placeholder={"" + res()}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Box>

            <Box>
              <TextField
                sx={{
                  m: 0,
                  width: "40vh",
                }}
                error={!passwordValidation}
                id="tandard-basic"
                variant="standard"
                type="password"
                label={
                  passwordValidation === false
                    ? "Password must include 8 character or more and include at least 1 lowercase, uppercase, number and symbol charactors"
                    : "Password"
                }
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
            </Box>
          </Box>
        ) : isAdvanced ? (
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
            <Box>
              <TextField
                sx={{
                  m: 0,
                  width: "40vh",
                }}
                error={emailValidation && !!email}
                id="sandard-basic"
                variant="standard"
                type="email"
                label={
                  email.includes("+")
                    ? "Email Address mustn't include '+'"
                    : !(
                        email.includes("@") &&
                        email.indexOf("@") !== 0 &&
                        email.indexOf("@") !== email.length - 1
                      ) && !!email
                    ? "Email Address must include '@'"
                    : "Email Address"
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                value={email}
                placeholder="Enter Your Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Box>
            <Box>
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
                      <Badge />
                    </InputAdornment>
                  ),
                }}
                value={fullname}
                placeholder="Enter Your Full Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </Box>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={!passwordValidation}
              type="password"
              variant="standard"
              label="key"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              value={key}
              placeholder="Enter Your Key (check you email inbox)"
              onChange={(e) => setKey(e.target.value)}
            />{" "}
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={false}
              type="password"
              variant="standard"
              label={
                passwordValidation === false
                  ? "Password must include 8 character or more and include at least 1 lowercase, uppercase, number and symbol charactors"
                  : "Password"
              }
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
            <Box>
              <TextField
                sx={{
                  m: 0,
                  width: "40vh",
                }}
                error={password !== passwordagain}
                type="password"
                variant="standard"
                label="Confirm Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
                value={passwordagain}
                placeholder="Confirm Your Password"
                onChange={(e) => {
                  setPasswordagain(e.target.value);
                }}
              />

              <Grid container wrap="nowrap">
                <Grid item>
                  {" "}
                  <FormControlLabel
                    label={
                      <Box>
                        <span>I accept the </span>
                        <Link to={"/termsvf"}>
                          terms of use and privacy policy
                        </Link>
                      </Box>
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
            </Box>
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
            <Box>
              <TextField
                sx={{
                  m: 0,
                  width: "40vh",
                }}
                error={emailValidation && !!email}
                id="sandard-basic"
                variant="standard"
                type="email"
                label={
                  email.includes("+")
                    ? "Email Address mustn't include '+'"
                    : !(
                        email.includes("@") &&
                        email.indexOf("@") !== 0 &&
                        email.indexOf("@") !== email.length - 1
                      ) && !!email
                    ? "Email Address must include '@'"
                    : "Email Address"
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                value={email}
                placeholder={"" + res()}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Box>
          </Box>
        )}
      </Grid>
      <Grid item xs={4} sx={{ padding: "0vh" }}>
        <Grid container wrap="nowrap">
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
            <Box className="text">
              <a href="forgotpass" style={{ color: "#FF8B17" }}>
                Trouble Logging In?
              </a>
            </Box>
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
        <YoadButn
          variant="outlined"
          disabled={/* !isAllowedToSignIn || */ emailValidation}
          color="inherit"
          sx={{
            color: "#FF8B17",
            width: "45vh",
            height: "6vh",
            borderRadius: "30px",
          }}
          onClick={() =>
            isSignIn
              ? setLabel("Signing in...")
              : isAdvanced
              ? setLabel("Signing up...")
              : setLabel("Continueing...")
          }
        >
          {label === "Continiue to Home Page" ? (
            <Link to="../">By clicking in this link</Link>
          ) : (
            label
          )}
        </YoadButn>

        {label === "Signing in..." && (
          <Signin email={email} password={password} setLabel={setLabel} />
        )}
        {label === "Continueing..." && (
          <SignupReq
            setLabel={setLabel}
            setIsAdvanced={setIsAdvanceed}
            email={email}
          />
        )}
        {label === "Signing up..." && (
          <SignupFin
            setLabel={setLabel}
            email={email}
            secretKey={key}
            fullname={fullname}
            password={password}
            passwordagain={passwordagain}
          />
        )}
      </Grid>
    </Grid>
  );
}

const medareg = (k: number, arr: number[]) => {
  let ret = 0;
  if (k < 0) return -1;
  arr.forEach((n) => {
    if (n < k) ret = ret + 2;
    else ret = ret + 3;
  });
  return ret;
};

const medaregB = (k: number, arr: number[]) => {
  if (k < 0) return -1;
  let left = 0;
  let right = arr.length - 1;
  let index = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= k) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return (
    (index === -1 ? 0 : index) * 2 +
    (arr.length - (index === -1 ? 0 : index)) * 3
  );
};

const res = () => medaregB(2, [1, 2, 3, 4, 5]);

/* 

#include <stdio.h>

int medareg(int k, int arr[], int n) {
    if (k < 0) return -1;
    int left = 0;
    int right = n - 1;
    int index = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] >= k) {
            index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return (index == -1 ? 0 : index) * 2 + (n - (index == -1 ? 0 : index)) * 3;
}

int find_optimal_k(int arr1[], int n, int arr2[], int m) {
    int optimal_k = arr1[0];
    int optimal_res = 0;
    for (int i = 0; i < m; i++) {
        int left = 0;
        int right = n - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr1[mid] <= arr2[i]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        int res1 = (left) * 2 + (n - left) * 3;
        int res2 = (i) * 2 + (m - i) * 3;
        if (res1 > res2) {
            if (res1 > optimal_res) {
                optimal_k = arr1[left - 1];
                optimal_res = res1;
            }
        }
    }
    return optimal_k;
}



int main() {
    int k = 2;
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = medareg(k, arr, n);
    printf("Input: k=%d, arr=[", k);
    for (int i = 0; i < n; i++) {
        printf("%d, ", arr[i]);
    }
    printf("]\nOutput: %d\n", result);
    k = 4;
    int arr1[] = {1, 2, 3, 5};
    n = sizeof(arr1) / sizeof(arr1[0]);
    result = medareg(k, arr1, n);
    printf("Input: k=%d, arr=[", k);
    for (int i = 0; i < n; i++) {
        printf("%d, ", arr1[i]);
    }
    printf("]\nOutput: %d\n", result);
    k = 0;
    int arr2[] = {1, 2, 3, 5};
    n = sizeof(arr2) / sizeof(arr2[0]);
    result = medareg(k, arr2, n);
    printf("Input: k=%d, arr=[", k);
    for (int i = 0; i < n; i++) {
        printf("%d, ", arr2[i]);
    }
    printf("]\nOutput: %d\n", result);
    k = 0;
    int arr3[] = {1, 2, 3, 4, 5};
    n = sizeof(arr3) / sizeof(arr3[0]);
    result = medareg(k, arr3, n);
    printf("Input: k=%d, arr=[", k);
    for (int i = 0; i < n; i++) {
        printf("%d, ", arr3[i]);
    }
    printf("]\nOutput: %d\n", result);
    return 0;
}
 */
