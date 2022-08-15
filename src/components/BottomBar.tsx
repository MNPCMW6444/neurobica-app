import NeurobicaColors from "../util/NeurobicaColors";
import Body from "./Body";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function BottomBar() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
   <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction href="/my-account/MyAccount" label="Train" icon={<FitnessCenterIcon />} />
  <BottomNavigationAction href="/my-brain" label="Home" icon={<HomeIcon />} />
  <BottomNavigationAction href="/train-my-brain" label="Brain" icon={<PsychologyOutlinedIcon />} />
</BottomNavigation>
    </div>
  );
}
