import Axios from "axios";
import { useEffect } from "react";
import { Store } from "react-notifications-component";
import domain from "../../util/domain";

interface SignupReqProps {
  setLabel: Function;
  email: string;
}

export default function SignupReq(props: SignupReqProps) {
  const { email, setLabel } = props;
  useEffect(() => {
    const signupReq = async () => {
      try {
        await Axios.post(domain + "user/signupreq", {
          email,
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
    signupReq();
  }, [email, setLabel]);
  return null;
}
