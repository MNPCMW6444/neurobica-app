import Axios from "axios";
import { useContext, useEffect } from "react";
import { serialize } from "v8";
import UserContext from "../../context/UserContext";
import domain from "../../util/domain";

export default function Signout() {
  const { getUser, user } = useContext(UserContext);

  useEffect(() => {
    const signout = async () => {
      try {
        await Axios.get(domain + "user/signout", {});
        getUser();
        console.log(user);
        //  debugger;
      } catch (err: any) {}
    };
    signout();
  }, []);
  return null;
}
