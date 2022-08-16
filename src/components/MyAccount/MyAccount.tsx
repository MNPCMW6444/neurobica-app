import useUser from "../../hooks/useUser";
import LoginPage from "../LoginPage/LoginPage";

export default function MyAccount() {
  const [user] = useUser("loggedIn", {}, []);

  return (
    <>
      <div className="myAccount">
        <LoginPage />
      </div>
    </>
  );
}
