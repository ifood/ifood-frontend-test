import React, { createContext, useState, useEffect, useContext } from "react";

import SpotifyService from "../Services/spotifyService";

interface IAuthContext {
  isAuthenticated: boolean;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const hasToken = () => !!localStorage.getItem("@spotifood:RefreshToken");

  const getAccessToken = async (code: string) => {
    try {
      const {
        accessToken,
        refreshToken,
        tokenType,
      } = await SpotifyService.getAccessToken(code);
      localStorage.setItem("@spotifood:AccessToken", accessToken);
      localStorage.setItem("@spotifood:RefreshToken", refreshToken);
      localStorage.setItem("@spotifood:TokenType", tokenType);
      window.location.href = "/";
    } catch (error) {
      throw new Error(
        "Tentamos.... mas não conseguimos fazer o login com sua conta do Spotify."
      );
    }
  };

  const refreshToken = async () => {
    const token = localStorage.getItem("@spotifood:RefreshToken");

    try {
      const { accessToken, tokenType } = await SpotifyService.refreshesToken(
        token as string
      );

      localStorage.setItem("@spotifood:AccessToken", accessToken);
      localStorage.setItem("@spotifood:TokenType", tokenType);
      setIsAuthenticated(true);
    } catch (error) {
      throw new Error(
        "Desculpe, um erro aconteceu. Por favor, refaça o login."
      );
    }
  };

  useEffect(() => {
    const validateAccess = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const spotifyError = urlParams.get("error");

      try {
        if (spotifyError) {
          throw new Error(
            "Tentamos.... mas não conseguimos fazer o login com sua conta do Spotify."
          );
        }

        if (code) {
          await getAccessToken(code);
          return;
        }

        if (hasToken()) {
          await refreshToken();
        }
      } catch ({ message }) {
        throw new Error(message);
      }
    };

    validateAccess();
  }, []);

  const signOut = () => {
    localStorage.removeItem("@spotifood:AccessToken");
    localStorage.removeItem("@spotifood:RefreshToken");
    localStorage.removeItem("@spotifood:TokenType");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProviver");
  }

  return context;
}

export { AuthProvider, useAuth };
