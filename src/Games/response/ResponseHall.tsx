import axios from "axios";
import { useEffect } from "react";
import { TypoYoad } from "../../TypoYoad";
import domain from "../../util/domain";
import { avg } from "./ResponseTime";

export default function ResponseHall({ scores }: any) {
  useEffect(() => {
    const asyncSend = async () => {
      try {
        await axios.post(domain + "response/save", {
          score: avg(scores),
        });
      } catch (e) {
        console.log(e);
      }
    };
    asyncSend();
  }, []);

  return <TypoYoad>{avg(scores)}</TypoYoad>;
}
