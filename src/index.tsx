import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SidebarContextProvider from "./contexts/SidebarContext";
import LanguageContextProvider from "./contexts/LanguageContext";
import AuthContextProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <AuthContextProvider>
    <SidebarContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </SidebarContextProvider>
  </AuthContextProvider>
);
