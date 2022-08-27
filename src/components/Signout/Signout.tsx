import Axios from "axios";
import { useEffect } from "react";
import domain from "../../util/domain";

interface SignoutProps {
  setUser: Function;
}

export default function Signout(props: SignoutProps) {
  useEffect(() => {
    const Signout = async () => {
      try {
        props.setUser((await Axios.get(domain + "user/signout", {})).data);
        debugger;
      } catch (err: any) {
        debugger;
      }
    };
    Signout();
  }, []);
  return null;
}
