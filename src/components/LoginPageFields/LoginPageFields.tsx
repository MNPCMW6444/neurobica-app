import Email from '@mui/icons-material/EmailOutlined';
import Lock from '@mui/icons-material/LockOutlined';
import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function LoginPageFields() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <br />

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
          <TextField     sx={{
          m: 0,
          width:"40vh"

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
          <TextField sx={{
          m: 0,
          width:"40vh"

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
    </div>
  );
}
