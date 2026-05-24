import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.jsx";
import ScrollToTopButton from "./components/ui/ScrollToTopButton.jsx";
import AIProjectAssistant from "./components/ai/AIProjectAssistant.jsx";

import "./i18n/index.js";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToTopButton />
      <AIProjectAssistant />
    </BrowserRouter>
  </React.StrictMode>
);