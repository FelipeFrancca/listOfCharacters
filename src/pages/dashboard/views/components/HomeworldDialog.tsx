import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material";

interface Homeworld {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface HomeworldDialogProps {
  open: boolean;
  onClose: () => void;
  homeworld: Homeworld | null;
  characters: Character[];
}

const HomeworldDialog: React.FC<HomeworldDialogProps> = ({ open, onClose, homeworld, characters }) => {
  if (!homeworld) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{homeworld.name}</DialogTitle>
      <DialogContent>
        <Typography><strong>Rotation Period:</strong> {homeworld.rotation_period}</Typography>
        <Typography><strong>Orbital Period:</strong> {homeworld.orbital_period}</Typography>
        <Typography><strong>Diameter:</strong> {homeworld.diameter}</Typography>
        <Typography><strong>Climate:</strong> {homeworld.climate}</Typography>
        <Typography><strong>Gravity:</strong> {homeworld.gravity}</Typography>
        <Typography><strong>Terrain:</strong> {homeworld.terrain}</Typography>
        <Typography><strong>Surface Water:</strong> {homeworld.surface_water}</Typography>
        <Typography><strong>Population:</strong> {homeworld.population}</Typography>
        <Typography><strong>Residents:</strong></Typography>
        {homeworld.residents.map((residentUrl) => {
          const residentId = parseInt(residentUrl.split("/").filter(Boolean).pop() || "0", 10);
          const resident = characters.find((char) => char.id === residentId);
          return <Typography key={residentId}>{resident ? resident.name : `Resident ${residentId}`}</Typography>;
        })}
        <Button variant="contained" onClick={onClose} color="error" fullWidth>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default HomeworldDialog;
