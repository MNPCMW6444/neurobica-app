import NeurobicaLogo from "../../../../global-components/images/NeurobicaLogo";
import { Email, Lock } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function LoginPageSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  return (
    
    <>
    <div>
        <NeurobicaLogo zoom={"30%"} />
    </div>
    <div>
      <br />
      <br />
      <br />

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
            error={false}
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
            error={false}
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
        <br />
        <div>
          <TextField
            error={false}
            type="repeat password"
            label="repeat Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
            value={repassword}
            placeholder="Confirm Your Password"
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
          />
        </div>
      </Box>

      <br />
      <br />
      <br />
    </div>
    </>
  )
}


