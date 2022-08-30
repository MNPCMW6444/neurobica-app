import Axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { serialize } from "v8";
import UserContext from "../../context/UserContext";
import domain from "../../util/domain";

export default function Signout() {
  const { getUser } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {
    const signout = async () => {
      try {
        debugger;

        await Axios.get(domain + "user/signout", {});
        await getUser();
        debugger;
        navigate("/my-account");
      } catch (err: any) {}
    };
    signout();
  }, []);
  return null;
}
