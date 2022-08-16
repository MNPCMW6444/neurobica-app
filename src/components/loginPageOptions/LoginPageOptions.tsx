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

          <FormControlLabel sx={{
            display:"flex",
            justifyContent:"center",

          }}
          label="Rememmber Password"
        control={
          <Checkbox sx={{
             fontSize: "28"

          }}
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
            size="small"
          />
        }
      />
      
   

  );
}
