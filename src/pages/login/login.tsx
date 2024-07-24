import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Box, Button, TextField } from "@mui/material";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      setMessage("Login successful!");
      navigate("/");
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <Box className="flex justify-center items-center flex-col h-screen ">
    <Box className="flex justify-center items-center flex-col gap-4 bg-white w-80 h-80 rounded-lg p-10">
      <TextField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="outlined-basic"
        label="Login"
        variant="outlined"
      />
      <TextField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="outlined-basic"
        label="Password"
        variant="outlined"
        />
      <Button variant="contained" color="error" fullWidth onClick={handleLogin}>Login</Button>
      <Button variant="contained" color="warning" href="/listOfCharacters">Voltar</Button>
      {message && <p>{message}</p>}
        </Box>
    </Box>
  );
};

export default Login;
