import React from "react";
import GlobalStyle from "./styles/global";
import Main from "./pages/Main";
import { ToastProvider } from "./hooks/toast";

const App: React.FC = () => (
  <>
    <ToastProvider>
      <Main />
    </ToastProvider>
    <GlobalStyle />
  </>
);

export default App;
