import * as React from "react";
import Box from "@mui/material/Box";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { Button } from "@mui/material";

const Dashboard: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/listOfCharacters', { replace: true });
    window.location.reload();
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <Box className="p-10">
      <div className="fixed top-0 left-0 p-10">
        {isAuthenticated ? (
          <Button variant="contained" color="error" fullWidth
            onClick={handleLogout}
            className="text-green-600 hover:text-green-800"
          >
            Logout 🔓
          </Button>
        ) : (
          <Button variant="contained" color="error" fullWidth
            onClick={handleLoginRedirect}
            className="text-red-600 hover:text-red-800"
          >
            Go to login
          </Button>
        )}
      </div>
      <Outlet />
    </Box>
  );
};

export default Dashboard;
