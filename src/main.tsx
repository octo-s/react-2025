import { createRoot } from "react-dom/client";

const reactRoot = createRoot(document.getElementById("root")!);
import { App } from "./components/App/App";

import "./styles/global.scss";
import ThemeProvider from "./providers/ThemeProvider";
import { UserProvider } from "./providers/UserProvider";

const TITLE = "Список ресторанов";

reactRoot.render(
  <ThemeProvider>
    <UserProvider>
      <App title={TITLE} />
    </UserProvider>
  </ThemeProvider>,
);
