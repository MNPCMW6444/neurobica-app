import { YoadButn } from "../../YoadButn";

export default function Hall({
  setFightsnOn,
  setLevel,
  setTimer,
  setHits,
  setScore,
  setPartyMode,
}: any) {
  return (
    <YoadButn
      variant="outlined"
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
    </YoadButn>
  );
}
