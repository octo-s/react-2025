import React, { useMemo, useState } from "react";
import { defaultTheme, type Theme, ThemeContext } from "./ThemeContext";

type ThemeProviderProps = {
  children?: React.ReactNode;
};
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
