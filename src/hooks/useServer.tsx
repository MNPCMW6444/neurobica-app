import Axios from "axios";
import { useEffect, useState } from "react";
import domain from "../util/domain";

export default function Server() {
  const [finished, setFinished] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);

  useEffect(() => {
    const checkIfServerIsThere = async () => { setResult((await Axios.get(domain + "areyoualive")).data.answer === "yes"); setFinished(true); }
    checkIfServerIsThere();
  }, [])

  return { isFinished: finished, theAnswer: result };
}
