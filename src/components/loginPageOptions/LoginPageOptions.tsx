import Checkbox from "@mui/material/Checkbox";
import React from "react";
import "./loginPageOptions.css";
export default function LoginPageOptions() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

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
      Remember Password?
    </div>
  );
}
