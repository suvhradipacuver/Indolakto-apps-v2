import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarContextProvider");
  }

  return context;
};

export default useSidebar;
