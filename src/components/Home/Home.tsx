import Button from "@mui/material/Button";
import "../../assets/fonts.css";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import Signout from "../Signout/Signout";
import Grid from "@mui/material/Grid";
import LoginStatus from "../LoginStatus/LoginStatus";

import Manager from "../../Games/memory/Manager";
import ResponseTime from "../../Games/response/Manager";
import NewRadar from "./NewRadar";

export default function Home() {
  const { user } = useContext(UserContext);
  const [signout, Signoutf] = useState(false);

  const [memory, setMemory] = useState(false);
  const [response, setResponse] = useState(false);

  return memory || response ? (
    memory ? (
      <Manager />
    ) : (
      <ResponseTime />
    )
  ) : (
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
        <Grid item>
          <Button onClick={() => setMemory(true)}>Play Memory Here</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => setResponse(true)}>Play Response Here</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => {}}>Play Memory with Route</Button>
        </Grid>
        <Grid item width="80vw" height="80vw">
          <NewRadar></NewRadar>
        </Grid>
        {signout && <Signout />}
      </Grid>
      <LoginStatus />
    </>
  );
}
