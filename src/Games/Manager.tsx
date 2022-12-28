import { useState } from "react";
import Cards from "./Cards";
import Hall from "./Hall";
import Party from "./Party";
import { timeInSeconds } from "./settings";

export type Hit = "X" | "V";

export default function Manager() {
  const [fightsnOn, setFightsnOn] = useState(true);

  const [level, setLevel] = useState(2);

  const [timer, setTimer] = useState(new Date().getTime());

  const [hits, setHits] = useState<Hit[]>([]);

  const [score, setScore] = useState<number>(0);

  const [partyMode, setPartyMode] = useState<boolean>(false);

  const finishParty = (newValue: boolean) => {
    setPartyMode(newValue);
  };

  const restartGame = () => {
    setFightsnOn(true);

    setLevel(2);

    setTimer(new Date().getTime());

    setHits([]);

    setScore(0);

    setPartyMode(false);
  };

  const finishgame = () => fightsnOn && setFightsnOn(false);

  if (new Date().getTime() - timer > timeInSeconds * 1000) {
    debugger;
    finishgame();
  }

  if (hits.length === level) {
    if (hits.filter((hit) => hit === "X").length > 1) {
      setScore(score - 2 ** (level - 1) * 100);
      setLevel((level) => level - 1);
      setHits([]);
    } else if (hits.filter((hit) => hit === "X").length === 1) setHits([]);
    else {
      setHits([]);
      setScore(score + 2 ** level * 100);
      setLevel(level + 1);
    }
    setPartyMode(true);
  }

  if (fightsnOn)
    return partyMode ? (
      <Party onChange={finishParty}></Party>
    ) : (
      <Cards
        n={level}
        hits={hits}
        setHits={setHits}
        score={score}
        setTimer={setTimer}
        timer={timer}
      />
    );
  return <Hall setFightsnOn={restartGame} />;
}
