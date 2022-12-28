import Button from "@mui/material/Button";

export default function Hall({ setFightsOn }: any) {
  return <Button onClick={() => setFightsOn(true)}>Play again?</Button>;
}
