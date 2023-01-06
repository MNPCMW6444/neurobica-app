import { Table, TableBody, TableCell, TableRow } from "@mui/material";
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
    <>
      <StatusBar />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        bgcolor={NeurobicaColors.yea}
        height="100vh"
        width="100vw"
      >
        <Grid item>
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
        </Grid>
        <Grid item>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
                <TableCell>
                  <TypoYoad> shd hjkas djkh</TypoYoad>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </>
  ) : (
    <LoginPage />
  );
}
