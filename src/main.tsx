import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AudioProvider } from "./components/AudioContext"; // ✅ Import AudioProvider

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AudioProvider> {/* ✅ Wrap App with AudioProvider */}
      <App />
    </AudioProvider>
  </StrictMode>
);
