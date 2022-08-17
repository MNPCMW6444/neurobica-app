import Button from "@mui/material/Button";
import LoginStatus from "../LoginStatus/LoginStatus";
import "./statusBar.css";
import NeurobicaLogo from "../NeurobicaSmallLogo/NeurobicaSmallLogo";
import Grid from "@mui/material/Grid";

export default function StatusBar() {
  return (
    <>
      <div className="statusBar">
        <Grid container>
          <Grid item >
          <NeurobicaLogo />
        </Grid>
        <Grid item justifyContent="right ">
          <Button
            variant="outlined"
            href="../../my-account/auth"
            sx={{
              color: "GrayText",
              border: "HighlightText",
            }}
          >
            Login
          </Button>
        </Grid>

        </Grid>
      </div>
    </>
  );
}
