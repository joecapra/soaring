import * as React from "react";
import { useState, createContext } from "react";

export const StoreContext = createContext();

// This context provider is passed to any component requiring the context
export const StoreProvider = ({ children }) => {
  const [checklists, setChecklists] = useState([]);

  return (
    <StoreContext.Provider
      value={{
        checklists,
        setChecklists,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
