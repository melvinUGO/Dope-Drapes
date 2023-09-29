import React from "react";
import { UserContextProvider } from "./userContext";
import { NavigationContextProvider } from "./navigaionContext";
import { CartContextProvider } from "./cartContext";

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UserContextProvider>
        <NavigationContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </NavigationContextProvider>
      </UserContextProvider>
    </>
  );
};

export default AppContextProvider;
