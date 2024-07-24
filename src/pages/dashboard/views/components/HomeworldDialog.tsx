import React, { useState, useEffect } from "react";
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
  const [residents, setResidents] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    if (homeworld) {
      const fetchResidents = async () => {
        const residentPromises = homeworld.residents.map(async (residentUrl) => {
          const response = await fetch(residentUrl);
          const data = await response.json();
          const residentId = parseInt(residentUrl.split("/").filter(Boolean).pop() || "0", 10);
          return { id: residentId, name: data.name };
        });

        const residentsData = await Promise.all(residentPromises);
        setResidents(residentsData);
      };

      fetchResidents();
    }
  }, [homeworld]);

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
        {residents.map((resident) => (
          <Typography key={resident.id}>{resident.name}</Typography>
        ))}
        <Button variant="contained" onClick={onClose} color="error" fullWidth>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default HomeworldDialog;
