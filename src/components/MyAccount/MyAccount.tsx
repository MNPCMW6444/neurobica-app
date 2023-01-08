import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { TypoYoad } from "../../TypoYoad";
import NeurobicaColors from "../../util/NeurobicaColors";
import LoginPage from "../Auth/Auth";
import StatusBar from "../StatusBar/StatusBar";
import logo from "../Tutorial/assets/logo.png";

export default function MyAccount() {
  let { user } = useContext(UserContext);

  return user ? (
    <Box bgcolor={NeurobicaColors.yea} height="100vh" width="100vw">
      <StatusBar />
      <Box
        position="fixed"
        component="img"
        src={logo}
        sx={{
          aspectRatio: "1.75 / 1",
          width: "70%",
          left: "12%",
          top: "6%",
        }}
      />
      <Box
        position="fixed"
        width="100vw"
        sx={{
          top: "30%",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          height="50vh"
          width="100vw"
        >
          <Grid item>
            <Grid
              container
              direction="column"
              height="50vh"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Box right="100px" position="relative" width="40vw">
                  <TypoYoad>Neurons available</TypoYoad>
                </Box>
                <Box left="100px" position="relative" width="40vw">
                  <TypoYoad>asdas</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box right="100px" position="relative" width="40vw">
                  <TypoYoad>Tests completed</TypoYoad>
                </Box>
                <Box left="100px" position="relative" width="40vw">
                  <TypoYoad>asdas</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box right="100px" position="relative" width="40vw">
                  <TypoYoad>Username</TypoYoad>
                </Box>
                <Box left="100px" position="relative" width="40vw">
                  <TypoYoad>asdas</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box right="100px" position="relative" width="40vw">
                  <TypoYoad>Email</TypoYoad>
                </Box>
                <Box left="100px" position="relative" width="40vw">
                  <TypoYoad>asdas</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box right="100px" position="relative" width="40vw">
                  <TypoYoad>Password</TypoYoad>
                </Box>
                <Box left="100px" position="relative" width="40vw">
                  <TypoYoad>asdas</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box right="100px" position="relative" width="40vw">
                  <TypoYoad>Notifications</TypoYoad>
                </Box>
                <Box left="100px" position="relative" width="40vw">
                  <TypoYoad>asdas</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box right="100px" position="relative" width="40vw">
                  <TypoYoad>Newsletter</TypoYoad>
                </Box>
                <Box left="100px" position="relative" width="40vw">
                  <TypoYoad>asdas</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box right="100px" position="relative" width="40vw">
                  <TypoYoad>Privacy policy</TypoYoad>
                </Box>
                <Box left="100px" position="relative" width="40vw">
                  <TypoYoad></TypoYoad>
                </Box>
              </Grid>{" "}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  ) : (
    <LoginPage />
  );
}
