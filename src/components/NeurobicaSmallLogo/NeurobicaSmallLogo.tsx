import Box from '@mui/material/Box'
import React from 'react'
import NeurobicaLogoAsset from "../../assets/LogoPNG.png";

export default function NeurobicaSmallLogo() {
  return (
    <Box
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
    alt="Neurobica Logo"
    src={NeurobicaLogoAsset}
  />
    )
}
