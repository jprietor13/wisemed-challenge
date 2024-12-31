import { createRoot } from "react-dom/client";
import "bulma/css/bulma.min.css";
import "./styles/main.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
