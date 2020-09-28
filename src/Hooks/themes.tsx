import React, { createContext, useState, useContext } from "react";

import ifood from "../Styles/Themes/ifood";
import spotify from "../Styles/Themes/spotify";


interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
    title: string;

    colors: {
        first: string;
      second: string;
      third: string;

        white: string;
        black: string;
        gray: string;

        on: string;
        off: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@spotifood:theme');
    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return spotify
    }
  });

  const toggleTheme = () => {
    if (theme.title === "Spotify") {
      setTheme(ifood);
      localStorage.setItem('@spotifood:theme', JSON.stringify(ifood));
    } else {
      setTheme(spotify);
      localStorage.setItem('@spotifood:theme', JSON.stringify(spotify));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
