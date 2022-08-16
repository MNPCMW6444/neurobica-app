import NeurobicaColors from "../util/NeurobicaColors";
import Body from "./Body";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { display, grid } from "@mui/system";

export default function BottomBar() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
   <BottomNavigation
  showLabels
  value={value}
  onChange={(value, newValue) => {
    setValue(newValue);
  }} sx={{
    backgroundColor:"#F5F5F5",
    height:"10vh",
    position:"fixed",
    bottom:"0",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"    

  }}
>
  <BottomNavigationAction href="/train-my-brain" label="Train" icon={<FitnessCenterIcon />} />
  <BottomNavigationAction href="/home" label="Home" icon={<HomeIcon />} />
  <BottomNavigationAction href="/my-brain"label="Brain" icon={<PsychologyOutlinedIcon />} />
</BottomNavigation>
    </div>
  );
}
