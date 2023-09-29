"use client";

const { createContext, useContext, useState, useEffect } = require("react");

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  let authUser = "";

  const getUserDetails = () => {
    if (typeof window !== "undefined") {
      authUser = JSON.parse(localStorage.getItem("user"));
      if (authUser) {
        setUser(authUser);
      }
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const saveUser = (userId, token) => {
    localStorage.setItem("user", JSON.stringify({ userId, token }));
    console.log("user saved");
    getUserDetails();
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser("");
    getUserDetails();
    console.log("log out");
  };

  return (
    <UserContext.Provider value={{ saveUser, getUserDetails, user, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalUserContext = () => {
  return useContext(UserContext);
};
