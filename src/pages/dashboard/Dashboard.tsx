import * as React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

export default Dashboard;
