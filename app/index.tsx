import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createAppWrapper } from "utils/Dom";
import App from "./App";

const root = createRoot(document.getElementById("root") || createAppWrapper());

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
