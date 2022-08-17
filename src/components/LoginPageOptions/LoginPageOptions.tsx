import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { display, fontSize } from "@mui/system";
import React from "react";
import "./loginPageOptions.css";

export default function LoginPageOptions() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <Grid container>
        <Grid item>
          {" "}
          <FormControlLabel
            label="Rememmber Me"
            sx={{
              color: "GrayText",
              width: "20vh",
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
    </>
  );
}
