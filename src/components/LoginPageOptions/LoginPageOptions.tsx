import Checkbox from "@mui/material/Checkbox";
import React from "react";
import "./loginPageOptions.css";
export default function LoginPageOptions() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
<>
<Grid container>
       <Grid item>   <FormControlLabel           
          label="Rememmber Me"
          sx={{
            color:"GrayText",
            width:"20vh"
          }}
        control={
          <Checkbox sx={{
             fontSize: "28"

  return (
    <div className="check">
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          alignSelf: "center",
        }}
      />
      </Grid>
      <Grid item alignSelf="center"> 
     <div className="text">
       <a href="src/components/ForgotPassword/ForgotPassword" style={{color:"#FF8B17"}}>Trouble Logging In?</a>
      Remember Password?
    </div>
  );
}
