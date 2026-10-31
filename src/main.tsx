import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// @ts-expect-error CSS imports are handled by the bundler.
import "./styles.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Check index.html for a div with id 'root'.");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);