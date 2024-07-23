import * as React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import "../../assets/styles/Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

export default Dashboard;
