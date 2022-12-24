import Button from "@mui/material/Button";
import "../../assets/fonts.css";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
// import Lil from "../Lil/Lil";
import { useContext, useState } from "react";
import Signout from "../Signout/Signout";
import { getSuggestedQuery } from "@testing-library/react";

export default function Home() {
  const { user, getUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [signout, Signoutf] = useState(false);

  return (
    <>
      {user ? (
        <div>
          Hi {user.fullname + "!!!"}
          <p>Do Tova Test</p>
          <p>logout here:</p>
          <Button
            onClick={() => {
              Signoutf(true);
              getUser();
            }}
          >
            Log Out
          </Button>
          {signout && <Signout />}
        </div>
      ) : (
        <Button onClick={() => navigate("/my-account")}>Login first</Button>
      )}
      {/*       <Lil />
       */}{" "}
    </>
  );
}
