import Axios from "axios";
import { useState, useEffect } from "react";
import domain from "../util/domain";

const useSignIn = (email: string, password: string): string => {
  const [error, setError] = useState<string>("...");
  useEffect(() => {
    const signIn = async () => {
      try {
        await Axios.post(domain + "user/signin", {
          email,
          password,
        });
        setError("");
      } catch (err: any) {
        setError(err.response.data.clientError);
      }
    };
    signIn();
  }, []);
  return error;
};

export default useSignIn;
