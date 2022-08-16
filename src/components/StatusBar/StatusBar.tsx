import Button from "@mui/material/Button";
import LoginStatus from "../LoginStatus/LoginStatus";
import "./statusBar.css";
import lneurobicaLogo from "../../assets/Logo PNG.png";
import NeurobicaLogo from "../NeurobicaLogo/NeurobicaLogo";

export default function StatusBar() {
  return (
    <>
      <div className="statusBar">
        <div
          className="neurobicaLogo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "3%",
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
