import Button from "@mui/material/Button";
import LoginStatus from "../LoginStatus/LoginStatus";
import "./statusBar.css";
import NeurobicaLogo from "../NeurobicaLogo/NeurobicaLogo";
import Grid from "@mui/material/Grid";

export default function StatusBar() {
  return (
    <>
      <div className="statusBar">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft="1%"
          paddingRight="1%"
        >
          <Grid item>
            <NeurobicaLogo c={1} />
          </Grid>
          <Grid item>
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
