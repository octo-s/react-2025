import React, { useMemo, useState } from "react";
import {
  DARK_THEME,
  defaultTheme,
  LOCAL_STORAGE_THEME_KEY,
  NORMAL_THEME,
  type Theme,
  ThemeContext,
} from "./ThemeContext";

type ThemeProviderProps = {
  children?: React.ReactNode;
};
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    const newTheme: Theme = theme === NORMAL_THEME ? DARK_THEME : NORMAL_THEME;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  const themeProps = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

  return <ThemeContext value={themeProps}>{children}</ThemeContext>;
};

export default ThemeProvider;
