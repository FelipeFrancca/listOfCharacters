import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const bgMoviment = document.querySelectorAll<HTMLElement>('body');
bgMoviment.forEach(bgMoviment => {
  bgMoviment.addEventListener('mousemove', (e) => {
    const rect = bgMoviment.getBoundingClientRect();

    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;

    bgMoviment.style.setProperty("--left", `${left}px`);
    bgMoviment.style.setProperty("--top", `${top}px`);
  });
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
