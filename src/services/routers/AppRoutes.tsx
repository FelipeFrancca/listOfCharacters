import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Home from "../../pages/dashboard/views/home";
import NotFound from "../../pages/dashboard/views/NotFound";
import Login from "../../pages/login/login";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="listOfCharacters" />} />
      <Route path="/listOfCharacters/login" element={<Login />} />
      <Route path="/listOfCharacters" element={<Dashboard />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
