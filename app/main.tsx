import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./features/app/app";

import "./styles/fonts.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
