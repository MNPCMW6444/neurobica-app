import useUser from "../../hooks/useUser";
import LoginPage from "../Auth/Auth";

export default function MyAccount() {
  const user = useUser();
  return user ? <div>Hi {user.fullname + "!!!"}</div> : <LoginPage />;
}
