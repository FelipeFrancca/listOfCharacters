import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./services/routers/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
