import Button from "@mui/material/Button";

export default function Hall({
  setFightsnOn,
  setLevel,
  setTimer,
  setHits,
  setScore,
  setPartyMode,
}: any) {
  return (
    <Button
      onClick={() => {
        setFightsnOn(true);

        setLevel(2);

        setTimer(new Date().getTime());

        setHits([]);

        setScore(0);

        setPartyMode(false);
      }}
    >
      Play again?
    </Button>
  );
}
