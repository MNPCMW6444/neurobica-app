import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import { TypoYoad } from "../../TypoYoad";
import domain from "../../util/domain";
import NeurobicaColors from "../../util/NeurobicaColors";
import LoginPage from "../Auth/Auth";
import StatusBar from "../StatusBar/StatusBar";
import logo from "../Tutorial/assets/logo.png";

export default function MyAccount() {
  let { user } = useContext(UserContext);

  const [memory, setMemory] = useState<number[]>([]);
  const [response, setResponse] = useState<number[]>([]);

  useEffect(() => {
    const getMemory = async () => {
      try {
        const scores = await axios.get(domain + "memory/getScores");
        const toProc = Array.from(
          new Set(scores.data.map((r: any) => r.result))
        );
        setMemory((toProc as number[]).filter((num: number) => num !== 0));
      } catch (e) {}
    };
    getMemory();
    const getResponse = async () => {
      try {
        const scores = await axios.get(domain + "response/getScores");
        const toProc = Array.from(
          new Set(scores.data.map((r: any) => r.result))
        );
        setResponse((toProc as number[]).filter((num: number) => num !== 0));
      } catch (e) {}
    };
    getResponse();
  }, []);

  const tests = Math.min(
    memory ? memory.length || 0 : 0,
    response ? response.length || 0 : 0
  );

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
              width="80vw"
              position="fixed"
              left="35%"
            >
              <Grid item>
                <Box
                  right="100px"
                  position="relative"
                  width="40vw"
                  display="inline-block"
                >
                  <TypoYoad>Neurons available</TypoYoad>
                </Box>
                <Box
                  position="relative"
                  width="40vw"
                  display="inline-block"
                  right="70px"
                >
                  <TypoYoad>{user.neurons || "none yet"}</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  right="100px"
                  position="relative"
                  width="40vw"
                  display="inline-block"
                >
                  <TypoYoad>Tests completed</TypoYoad>
                </Box>
                <Box
                  position="relative"
                  width="40vw"
                  display="inline-block"
                  right="70px"
                >
                  <TypoYoad>{tests}</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  right="100px"
                  position="relative"
                  width="40vw"
                  display="inline-block"
                >
                  <TypoYoad>Full Name</TypoYoad>
                </Box>
                <Box
                  position="relative"
                  width="40vw"
                  display="inline-block"
                  right="70px"
                >
                  <TypoYoad>{user.fullname}</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  right="100px"
                  position="relative"
                  width="40vw"
                  display="inline-block"
                >
                  <TypoYoad>Email</TypoYoad>
                </Box>
                <Box
                  position="relative"
                  width="40vw"
                  display="inline-block"
                  right="70px"
                >
                  <TypoYoad>{user.email}</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  right="100px"
                  position="relative"
                  width="40vw"
                  display="inline-block"
                >
                  <TypoYoad>Password</TypoYoad>
                </Box>
                <Box
                  position="relative"
                  width="40vw"
                  display="inline-block"
                  right="70px"
                >
                  <TypoYoad>*********</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  right="100px"
                  position="relative"
                  width="40vw"
                  display="inline-block"
                >
                  <TypoYoad>Notifications</TypoYoad>
                </Box>
                <Box
                  position="relative"
                  width="40vw"
                  display="inline-block"
                  right="70px"
                >
                  <TypoYoad>CHECKBOX</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  right="100px"
                  position="relative"
                  width="40vw"
                  display="inline-block"
                >
                  <TypoYoad>Newsletter</TypoYoad>
                </Box>
                <Box
                  position="relative"
                  width="40vw"
                  display="inline-block"
                  right="70px"
                >
                  <TypoYoad>CHECKBOX</TypoYoad>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  right="100px"
                  position="relative"
                  width="40vw"
                  display="inline-block"
                >
                  <TypoYoad>Privacy policy</TypoYoad>
                </Box>
                <Box
                  position="relative"
                  width="40vw"
                  display="inline-block"
                  right="70px"
                >
                  <TypoYoad>ref</TypoYoad>
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
