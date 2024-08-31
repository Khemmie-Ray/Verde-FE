// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppKitProvider } from "./config.jsx";

createRoot(document.getElementById("root")).render(
  <AppKitProvider>
    <App />
  </AppKitProvider>
);
