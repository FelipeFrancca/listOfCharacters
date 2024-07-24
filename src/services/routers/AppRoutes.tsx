import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Home from "../../pages/dashboard/views/home";
import PrivateRoute from "./auth/PrivateRoute";
import StarShipDetail from "../../pages/dashboard/private/starships/StarShipDetail";
import NotFound from "../../pages/dashboard/views/NotFound";
import Login from "../../pages/login/login";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Dashboard />}>
        <Route path="" element={<Home />} />
        <Route path="starships/:id" element={
          <PrivateRoute >
            <StarShipDetail />
          </PrivateRoute>
          } />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
