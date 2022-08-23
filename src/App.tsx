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
import { useEffect, useState } from "react";
import Axios from "axios";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import domain from "./util/domain";

Axios.defaults.withCredentials = true;

function App() {
  const [value, setValue] = useState<string>();
  const [finished, setFinished] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);
  useEffect(() => {
    const checkIfServerIsThere = async () => {
      const ttt = (await Axios.get(domain + "areyoualive")).data;
      setResult(ttt.answer === "yes");
      setFinished(true);
    }
    checkIfServerIsThere();
  }, [])
  setTimeout(() => { if (!finished) { setFinished(true); setResult(false); } }, 5000);

  return (
    finished ? result ?
      (<div style={{ height: "100vh", width: "100vw" }
      } >
        <div
          style={{
            height: "5%",
            width: "100%",
            position: "fixed",
            top: "0px",
          }}
        >
          <StatusBar />
        </div>
        <div
          style={{
            height: "85%",
            width: "100%",
            overflow: "scroll",
          }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/my-brain" element={<MyBrain />} />
              <Route path="/train-my-brain" element={<TrainMyBrain />} />
              <Route path="/termsvf" element={<TermsAndConditions />} />
            </Routes>
          </Router>
        </div>
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
          <BottomNavigationAction href="/home" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction
            href="/my-brain"
            label="Brain"
            icon={<PsychologyOutlinedIcon />}
          />
        </BottomNavigation>
      </div >) : (<div>fuck you</div>) : (<div>loading...</div>)
  );
}

export default App;
