import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { AppRouter } from "./router";

const rootElement = document.getElementById("root");
if (rootElement === null) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
