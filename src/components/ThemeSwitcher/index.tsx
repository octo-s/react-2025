import React from "react";
import SunIcon from "../../icons/sun.svg?react";
import MoonIcon from "../../icons/moon.svg?react";
import { Button } from "../Button/Button";
import { useTheme } from "../../providers/ThemeProvider/useTheme";
import { NORMAL_THEME } from "../../providers/ThemeProvider/ThemeContext";
export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      appearance="secondary"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === NORMAL_THEME ? (
        <MoonIcon width={36} height={36} />
      ) : (
        <SunIcon width={36} height={36} />
      )}
    </Button>
  );
};
