import { createRoot } from "react-dom/client";

const reactRoot = createRoot(document.getElementById("root")!);
import { App } from "./components/App/App";

import "./styles/global.scss";

const TITLE = "Список ресторанов";

reactRoot.render(<App title={TITLE} />);
