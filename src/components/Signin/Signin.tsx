import Axios from "axios";
import { useEffect } from "react";
import { Store } from "react-notifications-component";
import domain from "../../util/domain";

interface SigninProps {
  setLabel: Function;
  email: string;
  password: string;
}

export default function Signin(props: SigninProps) {
  const { email, password, setLabel } = props;
  useEffect(() => {
    debugger;

    const signIn = async () => {
      try {
        await Axios.post(domain + "user/signin", {
          email,
          password,
        });
        setLabel("Success!");
      } catch (err: any) {
        Store.removeAllNotifications();
        debugger;

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
    signIn();
  }, [email, password, setLabel]);
  return null;
}
