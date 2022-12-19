import Button from "@mui/material/Button";
import "../../assets/fonts.css";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Lil from "../Lil/Lil";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <div>Hi {user.fullname + "!!!"}</div>
      ) : (
        <Button onClick={() => navigate("/my-account")}>Login first</Button>
      )}
      {/*    <Lil /> */}
    </>
  );
}
