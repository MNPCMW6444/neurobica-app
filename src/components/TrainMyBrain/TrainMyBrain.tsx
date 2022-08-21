import { useState } from "react";
import GoogleLogin from "react-google-login";

export default function TrainMyBrain() {
  const [awe, setAwe] = useState<string>();

  return (
    <>
      <GoogleLogin
        clientId="1004322422072-682m9pbt3rulm9qf0bjs1l41uqvk39n8.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={() => setAwe("Success")}
        onFailure={() => setAwe("Falute")}
        cookiePolicy={"single_host_origin"}
      />
      <p>{awe}</p>
    </>
  );
}
