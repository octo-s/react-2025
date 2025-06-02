import {
  DARK_THEME,
  LOCAL_STORAGE_THEME_KEY,
  NORMAL_THEME,
  type Theme,
  ThemeContext,
} from "./ThemeContext";
import { useContext } from "react";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme: Theme = theme === NORMAL_THEME ? DARK_THEME : NORMAL_THEME;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
