import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./bootstrap.min.css";
import "./index.css";
import CategoriasProvider from "./context/CategoriasContext.jsx";
import RecetasProvider from "./context/RecetasContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoriasProvider>
      <RecetasProvider>
        <App />
      </RecetasProvider>
    </CategoriasProvider>
  </React.StrictMode>
);
