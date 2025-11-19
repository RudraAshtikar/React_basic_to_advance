import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  // aplya kade je pn props yetat ahe tyana as it is pudhe pass karnya sathi "children"(only a variable) use hoto just like "outlet"
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
