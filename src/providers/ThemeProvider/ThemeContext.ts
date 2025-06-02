import { createContext } from "react";

export const NORMAL_THEME = "normal";
export const DARK_THEME = "dark";

export type Theme = typeof NORMAL_THEME | typeof DARK_THEME;

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (_theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || NORMAL_THEME;

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
});
