import Email from "@mui/icons-material/EmailOutlined";
import BadgeIcon from "@mui/icons-material/Badge";
import Locked from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Checkbox, FormControlLabel, Grid, InputAdornment } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function LoginPageSignup() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }
  return (<Box
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
        value={repassword}
        placeholder="Confirm Your Password"
        onChange={(e) => {
          setRePassword(e.target.value);
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
                <Link to={'/termsvf'}>terms of use and privacy policy</Link>

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

  </Box>);
}
