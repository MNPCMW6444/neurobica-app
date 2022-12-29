import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const YoadButn = styled(Button)(({ theme }) => ({
  "&": {
    color: "#F5D300",
    outlineColor: "red",
  },
})) as typeof Button;
