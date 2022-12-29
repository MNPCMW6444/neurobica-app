import "../../assets/fonts.css";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import Signout from "../Signout/Signout";
import Grid from "@mui/material/Grid";
import LoginStatus from "../LoginStatus/LoginStatus";

import Manager from "../../Games/memory/Manager";
import ResponseTime from "../../Games/response/Manager";
import NewRadar from "./NewRadar";
import NeurobicaColors from "../../util/NeurobicaColors";
import Box from "@mui/material/Box";
import { TypePredicateKind } from "typescript";
import { TypoYoad } from "../../TypoYoad";
import { YoadButn } from "../../YoadButn";

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
        bgcolor={NeurobicaColors.yea}
      >
        <Grid item alignSelf="flex-start" paddingLeft="5%" paddingTop="10%">
          <TypoYoad display="inline">
            <b> Hello {(user && user.fullname) || "Guest"}, Ready To Train?</b>
          </TypoYoad>
        </Grid>
        <Grid item>
          <YoadButn variant="outlined" onClick={() => {}}>
            Take a Brain Snapshot
          </YoadButn>
        </Grid>
        <Grid item>
          <YoadButn variant="outlined" onClick={() => setMemory(true)}>
            Play Memory Here
          </YoadButn>
        </Grid>
        <Grid item>
          <YoadButn variant="outlined" onClick={() => setResponse(true)}>
            Play Response Here
          </YoadButn>
        </Grid>
        <Grid item>
          <YoadButn variant="outlined" onClick={() => {}}>
            Play Memory with Route
          </YoadButn>
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
