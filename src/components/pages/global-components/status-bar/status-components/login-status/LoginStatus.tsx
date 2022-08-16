import "./loginStatus.css";
import useUser from "../../../../../../hooks/useUser";



export default function LoginStatus() {
  const [user] = useUser("loggedIn", {}, []);

  return (
    <div className="loginStatus">
      {user._id ? (
        "Welcome back " + user.fullname + "!"
      ) : (
        <>
   
              </>
      )}
    </div>
  );
}
