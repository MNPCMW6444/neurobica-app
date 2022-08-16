import Button from "@mui/material/Button";
import LoginStatus from "../LoginStatus/LoginStatus";
import "./statusBar.css";
import NeurobicaLogo from "../NeurobicaLogo/NeurobicaLogo";

export default function StatusBar() {
  return (
    <>
      <div className="statusBar">
        <div
          className="neurobicaLogo"
          style={{
            margin: "43%",
          }}
        >
          <NeurobicaLogo />
        </div>
        <div>
          <LoginStatus />
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
        </div>
      </div>
    </>
  );
}
