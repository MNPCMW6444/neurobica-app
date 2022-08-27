/* import Axios from "axios";
import React, { , useEffect, useState } from "react";
import domain from "../util/domain";

const UserContext = React.createContext(null);

function UserContextProvider(props) {
  const [user, setUser] = useState(undefined);

  async function getUser() {
    const userRes = await Axios.get(`${domain}/user/loggedIn`);
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
 */

import React from "react";

export default function UserContext() {
  return <div>UserContext</div>;
}
