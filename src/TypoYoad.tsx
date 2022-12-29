import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const TypoYoad = styled(Typography)(({ theme }) => ({
  "&": {
    color: "#CCCCCC",
    fontFamily: "Roboto",
  },
})) as typeof Typography;
