import Axios from "axios";
import { useEffect } from "react";
import { Store } from "react-notifications-component";
import domain from "../../util/domain";

interface SignupProps {
  setLabel: Function;
  email: string;
  fullname: string;
  password: string;
  passwordagain: string;
}

export default function Signup(props: SignupProps) {
  const { email, fullname, password, passwordagain, setLabel } = props;
  useEffect(() => {
    const signup = async () => {
      try {
        await Axios.post(domain + "user/signup", {
          email,
          fullname,
          password,
          passwordagain,
        });
        setLabel("Success!");
      } catch (err: any) {
        Store.removeAllNotifications();
        Store.addNotification({
          title: "Error",
          message:
            err.response.data.clientError || err.response.data.serverError,
          type: "danger",
          container: "bottom-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
          insert: "top",
        });
        setLabel("Error!");
      }
    };
    signup();
  }, [email, password, setLabel]);
  return null;
}
