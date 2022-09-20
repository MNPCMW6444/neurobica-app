import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import HomeIcon from "@mui/icons-material/Home";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useState } from "react";

export default function BottomBar() {
  const [value, setValue] = useState<string>();

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(value, newValue) => {
        setValue(newValue);
      }}
      sx={{
        backgroundColor: "#F5F5F5",
        height: "10%",
        position: "fixed",
        bottom: "0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BottomNavigationAction
        href="/train-my-brain"
        label="Train"
        icon={<FitnessCenterIcon />}
      />
      <BottomNavigationAction href="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction
        href="/my-brain"
        label="Brain"
        icon={<PsychologyOutlinedIcon />}
      />
    </BottomNavigation>
  );
}
