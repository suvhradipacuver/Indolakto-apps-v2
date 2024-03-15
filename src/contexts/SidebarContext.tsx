import { ReactNode } from "react";
import { useState } from "react";
import { createContext } from "react";

interface Props {
  children: ReactNode;
}

interface SidebarState {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

// context
export const SidebarContext = createContext<SidebarState | undefined>(
  undefined
);

// context provider
const SidebarContextProvider = ({ children }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <SidebarContext.Provider
      value={{
        show,
        setShow,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
