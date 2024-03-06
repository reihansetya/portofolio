import { createContext, useState } from "react";

export const ActiveNavContext = createContext();

const ActiveNavContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState("");

  return (
    <ActiveNavContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </ActiveNavContext.Provider>
  );
};

export default ActiveNavContextProvider;
