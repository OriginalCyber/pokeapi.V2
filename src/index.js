import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/golbal.css";
import Roues from "./routes";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Roues />
  </React.StrictMode>
);

reportWebVitals();
