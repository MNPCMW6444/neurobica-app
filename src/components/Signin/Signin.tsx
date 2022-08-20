import React from "react";
import useSignIn from "../../hooks/useSignIn";

interface SigninProps {
  setLabel: Function;
  email: string;
  password: string;
}

export default function Signin(props: SigninProps) {
  props.setLabel("Signing In...");
  const res = useSignIn(props.email, props.password);
  props.setLabel(res ? "Error!" : "Success!");

  return null;
}
