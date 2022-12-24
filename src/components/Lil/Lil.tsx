import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";

import UserVisualDataRadar from "../UserVisualDataRadar/UserVisualDataRadar";

import { useEffect, useState } from "react";
import Axios from "axios";
import domain from "../../util/domain";
import Button from "@mui/material/Button";

export default function Lil() {
  const [numberOfTimes, setNumberOfTimes] = useState<number>(0);

  useEffect(() => {
    const getFromServer = async () =>
      setNumberOfTimes(
        (await Axios.get(domain + "howmanytimeshehadbeenhere")).data
      );
    getFromServer();
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 0, md: 0, lg: 2 }}
      columns={{ xs: 1, md: 1, lg: 1 }}
      paddingTop="7vh"
      alignItems="center"
      justifyContent="center"
    >
      {numberOfTimes > 1 ? <p>asd</p> : <p>ewrgwef</p>}

      <Grid item m={2} paddingLeft="3vh" lg={2} xs={2} sx={{ margin: "0" }}>
        <Typography
          sx={{
            color: "#FF8B17",
            textShadow: "1px 1px",
            fontFamily: "arial, Verdana, Sans-serif",
            margin: "0",
          }}
          variant="h5"
          gutterBottom={true}
        >
          Hello, Ready To Train?
        </Typography>
      </Grid>
      <Grid item m={2} xs={2} lg={2} paddingBottom="5vh">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: "#FF8B17",
            width: "100%",
            height: "8vh",
            fontSize: "3vh",
            borderRadius: "30px",
            margin: "0",
          }}
        >
          +
        </Button>
      </Grid>

      <Grid item m={2} lg={2} xs={2} paddingLeft="3vh" sx={{ margin: "0" }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            fontFamily: "arial, Verdana, Sans-serif",
            margin: "0",
          }}
          variant="h6"
          gutterBottom={true}
        >
          Check Your Gains
          <IconButton sx={{ left: "40%" }} aria-label="Gains">
            <ArrowForwardIosIcon />
          </IconButton>
        </Typography>
      </Grid>

      <Grid item paddingBottom="5vh" sx={{ width: "100%" }}>
        <UserVisualDataRadar />
      </Grid>
      <Grid item m={2} paddingLeft="3vh" lg={2} xs={2} sx={{ margin: "0" }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            fontFamily: "arial, Verdana, Sans-serif",
            margin: "0",
          }}
          variant="h6"
          gutterBottom={true}
        >
          Test Your Brain
          <IconButton aria-label="Gains" sx={{ left: "45%" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Typography>
      </Grid>

      <Grid item m={2} lg={2} xs={2} paddingBottom="10vh">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: "#FF8B17",
            width: "100%",
            height: "5vh",
            fontSize: "2vh",
            borderRadius: "30px",
            margin: "0",
          }}
        >
          Quick Start
        </Button>
      </Grid>
      {/* <Grid item sx={{ width: "100vh" }}>
<UserVisualData />
</Grid> */}
    </Grid>
  );
}
