import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [userName, setUsername] = useState(null);

  const logIn = () => {
    setIsloggedIn(true);
    setUsername("Mango");
  };

  const logOut = () => {
    setIsloggedIn(false);
    setUsername(null);
  };

  return (
    <userContext.Provider value={{ isLoggedIn, userName, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
};
