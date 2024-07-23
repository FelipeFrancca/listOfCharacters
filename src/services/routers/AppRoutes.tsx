import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/dashboard/views/home";
import NotFound from "../../pages/dashboard/views/NotFound";
import Dashboard from "../../pages/dashboard/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Dashboard />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
