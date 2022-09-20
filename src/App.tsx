import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";
import MyBrain from "./components/MyBrain/MyBrain";
import TrainMyBrain from "./components/TrainMyBrain/TrainMyBrain";
import { useEffect, useState } from "react";
import Axios from "axios";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import domain from "./util/domain";
import Grid from "@mui/material/Grid";
import brainGif from "./assets/spongebob-patrick.gif";
import { UserContextProvider } from "./context/UserContext";
import BottomBar from "./components/BottomBar/BottomBar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

Axios.defaults.withCredentials = true;

function App() {
  const [status, setStatus] = useState<string>(
    "Checking server availability..."
  );
  useEffect(() => {
    const checkIfServerIsThere = async () => {
      try {
        setStatus(
          (await Axios.get(domain + "areyoualive")).data.answer === "yes"
            ? "good"
            : "bad" + Math.random()
        );
      } catch (err) {
        setStatus("bad" + Math.random());
      }
    };
    status !== "good" && setTimeout(() => checkIfServerIsThere(), 500);
  }, [status]);

  const app = (
    <UserContextProvider>
      <Box sx={{ backgroundColor: "#FFF6F2" }}>
        <Box
          sx={{
            height: "100vh",
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
        </Box>
        <BottomBar />
      </Box>
    </UserContextProvider>
  );

  //TODO reDesign this message
  const serverErrorMessage = (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      paddingTop="5vh"
      direction="column"
    >
      <Grid item>
        <Box>
          Connction Failed. Check Your Internert Connection, If You Still Can't
          Connect To Our servers, Please Contact Our Technical Support Team.
        </Box>
      </Grid>
      <Grid item>
        <Box component={"img"} src={brainGif} alt="Brain Breakdown GIF"></Box>
      </Grid>
    </Grid>
  );

  return status === "Checking server availability..." ? (
    <Typography>Checking server availability...</Typography>
  ) : status === "good" || process.env.REACT_APP_UI_FLAG === "yes" ? (
    app
  ) : (
    serverErrorMessage
  );
}

export default App;
