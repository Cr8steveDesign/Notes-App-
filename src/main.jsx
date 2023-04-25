import React from "react";
import ReactDOM from "react-dom/client";
import { NotesProvider } from "./components/contexts/NotesContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>
);
