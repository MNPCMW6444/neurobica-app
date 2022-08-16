import StatusBar from "./components/StatusBar/StatusBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";
import MyBrain from "./components/MyBrain/MyBrain";
import TrainMyBrain from "./components/TrainMyBrain/TrainMyBrain";
import LoginPage from "./components/LoginPage/LoginPage";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import HomeIcon from "@mui/icons-material/Home";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<string>();

  return (
    <>
      <StatusBar />
      <BottomNavigation
        showLabels
        value={value}
        onChange={(value, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: "#F5F5F5",
          height: "10vh",
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
        <BottomNavigationAction href="/home" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          href="/my-brain"
          label="Brain"
          icon={<PsychologyOutlinedIcon />}
        />
      </BottomNavigation>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-brain" element={<MyBrain />} />
          <Route path="/train-my-brain" element={<TrainMyBrain />} />
          <Route path="/my-account/auth" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
