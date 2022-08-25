import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../../assets/fonts.css";

export default function Home() {
  return (
    <Grid
      container
      spacing={{ xs: 1, md: 1 }}
      columns={{ xs: 1, md: 1 }}
      direction="column"
      alignItems="flex-start"
      paddingTop="3vh"
    >
      <Grid item m={4} xs={4}>
        <Typography sx={{
          color: "#FFE1D4", WebkitTextStroke: "1px #FF8B17", textShadow: "2px 2px", fontFamily: "Lucida Console, Verdana, Sans-serif", width: "75vh"
        }} variant="h4" gutterBottom >
          Hello, Ready To Train?
        </Typography>
      </Grid>
      <Grid item m={4} xs={4} sx={{}} alignSelf="stretch"
      >
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: "#FF8B17",
            width: "60vh",
            height: "8vh",
            fontSize: "3vh",
            borderRadius: "30px",

          }}>+</Button>
      </Grid>

    </Grid >

  );
}
