import useSignIn from "../../hooks/useSignIn";
import useUser from "../../hooks/useUser";
import LoginPage from "../LoginPage/LoginPage";

export default function MyAccount() {
  const user = useUser();
  useSignIn("test3@gmail.com", "asdASD123%");
  return user ? <div>Hi {user.fullname + "!!!"}</div> : <LoginPage />;
}
