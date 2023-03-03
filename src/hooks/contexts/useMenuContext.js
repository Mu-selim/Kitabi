import { createContext, useState } from "react";

export const MenuContext = createContext();
export const MenuContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(null);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
