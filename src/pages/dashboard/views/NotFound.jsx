import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/NotFound.css";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        padding: 50,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="p" className="textNotfound">
          Algo não parece certo 🤔
        </Typography>
        <Typography variant="p" className="textNotfound">
          Não foi possivel encontrada esta pagina no momento, seu link deve esta
          faltando informações ou não existe neste site.
        </Typography>
      </Box>
      <Button
        sx={{ width: "20em" }}
        variant="contained"
        component={Link}
        to="/home"
      >
        Voltar a tela inicial
      </Button>
    </Box>
  );
}
