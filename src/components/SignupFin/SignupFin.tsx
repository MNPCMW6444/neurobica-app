import Axios from "axios";
import { useEffect } from "react";
import { Store } from "react-notifications-component";
import domain from "../../util/domain";

interface SignupFinProps {
  setLabel: Function;
  email: string;
  secretKey: string;
  fullname: string;
  password: string;
  passwordAgain: string;
}

export default function SignupFin(props: SignupFinProps) {
  const { setLabel, email, secretKey, fullname, password, passwordAgain } =
    props;
  useEffect(() => {
    const signupFin = async () => {
      try {
        await Axios.post(domain + "user/signupfin", {
          email,
          key: secretKey,
          fullname,
          password,
          passwordAgain,
        });
        setLabel("Success!");
      } catch (err: any) {
        Store.removeAllNotifications();
        Store.addNotification({
          title: "Error",
          message: err.response.data.clientError,
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
    signupFin();
  }, [email, fullname, secretKey, password, passwordAgain, setLabel]);
  return null;
}
