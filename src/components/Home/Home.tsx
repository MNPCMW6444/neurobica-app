import Button from "@mui/material/Button";
import "../../assets/fonts.css";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import Signout from "../Signout/Signout";
import Grid from "@mui/material/Grid";
import LoginStatus from "../LoginStatus/LoginStatus";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const { user } = useContext(UserContext);
  const [signout, Signoutf] = useState(false);

  let data = [
    {
      subject: "Attention",
      A: 50,
      B: 100,
      C: 50,
    },
    {
      subject: "Menory",
      A: 60,
      B: 100,
      C: 50,
    },
    {
      subject: "Response Time",
      A: 70,
      B: 100,
      C: 50,
    },
    {
      subject: "Flexability",
      A: 80,
      B: 100,
      C: 0,
    },
    {
      subject: "Creativity",
      A: 85,
      B: 100,
      C: 50,
    },
  ];

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        height="100vh"
        width="100vw"
        overflow="scroll"
      >
        <Grid item>
          Hello {(user && user.fullname) || "Guest"}, Ready To Check Your
          Progress?
        </Grid>
        <Grid item>
          <Button onClick={() => {}}>Take a Brain Snapshot</Button>
        </Grid>
        <Grid item width="80vw" height="80vw">
          <ResponsiveContainer width="100%" aspect={2} height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis fontSize={10} dataKey="subject" />
              <PolarRadiusAxis fontSize={10} angle={90} domain={[0, 100]} />
              <Radar
                name="Last Test"
                dataKey="A"
                stroke="#FF8B17"
                fill="#FF8B17"
                fillOpacity={0.2}
              />
              <Radar
                name="The One Before The Last Test"
                dataKey="B"
                stroke="#6E896A"
                fill="#6E896A"
                fillOpacity={0.2}
              />
              <Radar
                name="Tragedy"
                dataKey="C"
                stroke="#1E89FA"
                fill="#1E89FA"
                fillOpacity={0.2}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </Grid>
        {signout && <Signout />}
      </Grid>
      <LoginStatus />
    </>
  );
}
