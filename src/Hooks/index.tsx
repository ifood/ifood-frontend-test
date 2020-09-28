import React from "react";

import { AuthProvider } from "./auth";
import { FilterProvider } from "./playlistsHook";

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }: IAppProvider) => (
  <AuthProvider>
    <FilterProvider>{children}</FilterProvider>
  </AuthProvider>
);

export default AppProvider;
