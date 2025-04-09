"use client";

import { authDataType } from "@/utilities/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type AuthContextValueTypes = {
  authData: authDataType;
  setAuthData: Dispatch<SetStateAction<authDataType>>;
};

type AuthContextProviderTypes = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextValueTypes);

const AuthContextProvider = ({ children }: AuthContextProviderTypes) => {
  // States
  const [authData, setAuthData] = useState<authDataType>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
