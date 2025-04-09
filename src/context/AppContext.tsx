"use client";

import { createContext, RefObject, useRef } from "react";

type AppContextValuesTypes = { containerRef: RefObject<HTMLDivElement | null> };

type AppContextProviderTypes = {
  children: React.ReactNode;
};

export const AppContext = createContext({} as AppContextValuesTypes);

const AppContextProvider = ({ children }: AppContextProviderTypes) => {
  // Refs
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppContext.Provider value={{ containerRef }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
