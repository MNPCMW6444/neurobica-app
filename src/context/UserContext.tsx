import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import domain from "../util/domain";

const UserContext = createContext<any>(undefined);

function UserContextProvider(props: any) {
  const [user, setUser] = useState(undefined);

  async function getUser() {
    const userRes = await Axios.get(domain + "user/signedin");
    setUser(userRes.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
export { UserContextProvider };
