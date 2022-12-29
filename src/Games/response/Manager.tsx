import { useState } from "react";
import ResponseHall from "./ResponseHall";
import ResponseTime from "./ResponseTime";

export default function Manager() {
  const [rounds, setRounds] = useState(1);
  const [scores, setScores] = useState([]);

  return rounds < 5 ? (
    <ResponseTime
      rounds={rounds}
      setRounds={setRounds}
      scores={scores}
      setScores={setScores}
    />
  ) : (
    <ResponseHall scores={scores} />
  );
}
