import Box from "@mui/material/Box";
import NeurobicaLogoAsset from "../../assets/LogoPNG.png";
export default function NeurobicaLogo() {
  return (
    <Box
    component="img"
    sx={{
      maxWidth: { xs: "200px" },
    }}
    alt="Neurobica Logo"
    src={NeurobicaLogoAsset}
  />

  );
}
