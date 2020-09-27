import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import getToken from "../Utils/getToken";
import authenticateService from "../Services/authenticateService";

interface IAuthContext {
  token?: string | null;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IAuthProviderProps> = ({
  children,
}: IAuthProviderProps) => {
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem("@spotifood:token");

    if (storedToken) {
      return storedToken;
    }

    return null;
  });

  const location = useLocation();

  useEffect(() => {
    if (!token) {
      const { accessToken, expiresIn } = getToken(location.hash);

      if (accessToken) {
        const expiresAt = new Date();
        expiresAt.setSeconds(expiresAt.getSeconds() + expiresIn);

        localStorage.setItem("@spotifood:token", accessToken);
        localStorage.setItem("@spotifood:expiresAt", expiresAt.toString());

        setToken(accessToken);
      }
    } else {
      const currentDate = new Date();
      const expiresAt = localStorage.getItem("@spotifood:expiresAt");

      if (
        expiresAt &&
        currentDate.getTime() > Date.parse(expiresAt.toString())
      ) {
        localStorage.removeItem("@spotifood:token");
        localStorage.removeItem("@spotifood:expiresAt");

        authenticateService();
      }
    }

    if (window.location.hash !== "") {
      window.location.hash = "";
    }
  }, [token, location]);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
