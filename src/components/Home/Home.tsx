import Button from "@mui/material/Button";
import "../../assets/fonts.css";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import Signout from "../Signout/Signout";
import Weekly from "../HomeScreenGenerics/Weekly";
import Grid from "@mui/material/Grid";
import LoginStatus from "../LoginStatus/LoginStatus";

export default function Home() {
  const { user } = useContext(UserContext);
  const [signout, Signoutf] = useState(false);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        height="90vh"
        width="100vw"
        overflow="scroll"
      >
        <Grid item> Hi {(user && user.fullname) || "Guest" + "!!!"}</Grid>
        <Grid item>
          <p>Do Tova Test</p>
        </Grid>

        <Grid item>
          <Weekly
            defaultBooleanWeek={[
              true,
              false,
              true,
              true,
              true,
              false,
              undefined,
            ]}
          />
        </Grid>

        <Grid item>{signout && <Signout />}</Grid>
      </Grid>
      <LoginStatus />
    </>
  );
}
