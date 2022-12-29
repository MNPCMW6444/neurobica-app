import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { timeInSeconds } from "./settings";

export default function Timer({ otime }: any) {
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setX(timeInSeconds - Math.floor((new Date().getTime() - otime) / 1000)),
      500
    );

    return () => clearInterval(interval);
  }, []);

  return <Typography variant="h5">{"Timer: " + x}</Typography>;
}
