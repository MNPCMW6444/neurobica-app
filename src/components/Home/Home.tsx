import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../../assets/fonts.css";
import UserVisualData from "../UserVisualData/UserVisualData";
import UserVisualDataRadar from "../UserVisualDataRadar/UserVisualDataRadar";
import Mascot from "../../assets/MascotWeights.png"
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';

export default function Home() {
  return (
    <Grid
      container
      spacing={{ xs: 0, md: 0 }}
      columns={{ xs: 1, md: 1 }}
      paddingTop="7vh"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item m={2} paddingLeft="3vh" paddingBottom="0vh" xs={2} sx={{ margin: "0" }}>
        <Typography
          sx={{
            color: "#FF8B17",
            textShadow: "1px 1px",
            fontFamily: "arial, Verdana, Sans-serif",
            margin: "0",

          }}
          variant="h4"
          gutterBottom={true}
        >
          Hello, Ready To Train?
        </Typography>
      </Grid>
      <Grid item m={2} xs={2} paddingLeft="2vh" paddingBottom="5vh" >
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: "#FF8B17",
            width: "60vh",
            height: "8vh",
            fontSize: "3vh",
            borderRadius: "30px",
            margin: "0",

          }}
        >
          +
        </Button>
      </Grid>
      <Grid item m={2} paddingLeft="3vh" xs={2} sx={{ margin: "0" }}>
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
          <IconButton sx={{ marginLeft: "30vh" }} aria-label="Gains">
            <ArrowForwardIosIcon />
          </IconButton>
        </Typography>
      </Grid>



      <Grid item paddingBottom="5vh" sx={{ width: "80%" }}>
        <UserVisualDataRadar />
      </Grid>
      <Grid item m={2} paddingLeft="3vh" xs={2} sx={{ margin: "0" }}>
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
          <IconButton aria-label="Gains" sx={{ marginLeft: "34vh" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Typography>


      </Grid>

      <Grid item m={2} xs={2} paddingBottom="10vh" >
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: "#FF8B17",
            width: "65vh",
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
