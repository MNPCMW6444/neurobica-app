import Email from '@mui/icons-material/EmailOutlined';
import Lock from '@mui/icons-material/LockOutlined';
import Locked from '@mui/icons-material/Lock';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { InputAdornment } from "@mui/material";

export default function LoginPageSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  return (
    <>
      <div>
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
            <TextField sx={{
          m: 0,
          width:"40vh"

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
            <TextField sx={{
          m: 0,
          width:"40vh"

       }}
              error={false}
              type="password"
              variant="standard"

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
            <TextField sx={{
          m: 0,
          width:"40vh"

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
              value={repassword}
              placeholder="Confirm Your Password"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />
          </div>
        </Box>
      </div>
    </>
  );
}
