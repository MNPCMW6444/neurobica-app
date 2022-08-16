import useUser from "../../../hooks/useUser";
import "./myAccount.css";

export default function MyAccount() {
  const [user] = useUser("loggedIn", {}, []);

  return (
    <>

    <div className="myAccount">
  
        
    </div>
    </>
  );
  
}
