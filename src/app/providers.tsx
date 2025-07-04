"use client";

import { type ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ThemeProvider from "../providers/ThemeProvider";
import { UserProvider } from "../providers/UserProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>{children}</UserProvider>
      </ThemeProvider>
    </Provider>
  );
}
