import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";   // Tailwind entry OR your global CSS
import "./styles.css";  // fallback basic CSS (delete if using Tailwind only)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
