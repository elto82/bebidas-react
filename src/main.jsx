import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./bootstrap.min.css";
import "./index.css";
import CategoriasProvider from "./context/CategoriasContext.jsx";
import RecetasProvider from "./context/RecetasContext.jsx";
import ModalProvider from "./context/ModalContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  </React.StrictMode>
);
