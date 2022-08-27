import Axios from "axios";
import { useEffect } from "react";
import domain from "../../util/domain";

interface SignedInProps {
  setUser: Function;
}

export default function SignedIn(props: SignedInProps) {
  useEffect(() => {
    const signedIn = async () => {
      try {
        props.setUser((await Axios.get(domain + "user/signedin", {})).data);
      } catch (err: any) {}
    };
    signedIn();
  }, []);
  return null;
}
