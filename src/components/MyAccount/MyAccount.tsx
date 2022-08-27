import { useContext } from "react";
import UserContext from "../../context/UserContext";
import LoginPage from "../Auth/Auth";

export default function MyAccount() {
  const { user, getUser } = useContext(UserContext);

  getUser();
  return user ? <div>Hi {user.fullname + "!!!"}</div> : <LoginPage />;
}
