import Box from "@mui/material/Box";
import NeurobicaLogoAsset from "../../assets/Logo PNG.png";
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

      component="img"
      sx={{
        height: { xs: "4vh" },
        width: { xs: "6vh" },
        maxHeight: { xs: "60px" },
        maxWidth: { xs: "150px" },
        position: { xs: "fixed" },
        top: { xs: 5 },
        left: { xs: 10 },
      }}
      alt="Blue Torch Logo"
      src={NeurobicaLogoAsset}
    />
  );
}
