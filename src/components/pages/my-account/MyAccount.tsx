import useUser from "../../../hooks/useUser";
import LoginPage from "./auth/LoginPage";
import "./myAccount.css";

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
