import Axios from "axios";
import React from "react";
import { useContext, useEffect } from "react";
import domain from "../../util/domain";

const UserContext = React.createContext(undefined);

export default function SignedIn() {
  const user = useContext(UserContext);

  useEffect(() => {
    const signedIn = async () => {
      try {
        /*         props.setUser((await Axios.get(domain + "user/signedin", {})).data);
         */ debugger;
      } catch (err: any) {
        debugger;
      }
    };
    signedIn();
  }, []);
  return null;
}
