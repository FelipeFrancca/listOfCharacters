import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material";

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
}

interface StarshipsDialogProps {
  open: boolean;
  onClose: () => void;
  starships: Starship[] | null;
  characters: Character[];
}

const StarshipsDialog: React.FC<StarshipsDialogProps> = ({ open, onClose, starships, characters }) => {
  if (!starships) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Starships</DialogTitle>
      <DialogContent>
        {starships.map((starship, index) => (
          <div key={index}>
            <Typography variant="h6">{starship.name}</Typography>
            <Typography><strong>Model:</strong> {starship.model}</Typography>
            <Typography><strong>Manufacturer:</strong> {starship.manufacturer}</Typography>
            <Typography><strong>Cost in Credits:</strong> {starship.cost_in_credits}</Typography>
            <Typography><strong>Length:</strong> {starship.length}</Typography>
            <Typography><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</Typography>
            <Typography><strong>Crew:</strong> {starship.crew}</Typography>
            <Typography><strong>Passengers:</strong> {starship.passengers}</Typography>
            <Typography><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</Typography>
            <Typography><strong>Consumables:</strong> {starship.consumables}</Typography>
            <Typography><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</Typography>
            <Typography><strong>MGLT:</strong> {starship.MGLT}</Typography>
            <Typography><strong>Starship Class:</strong> {starship.starship_class}</Typography>
            <Typography><strong>Pilots:</strong></Typography>
            {starship.pilots.map((characterUrl) => {
              const characterId = parseInt(characterUrl.split("/").filter(Boolean).pop() || "0", 10);
              const character = characters.find((char) => char.id === characterId);
              return <Typography key={characterId}>{character ? character.name : `Character ${characterId}`}</Typography>;
            })}
          </div>
        ))}
        <Button variant="contained" onClick={onClose} color="error" fullWidth>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default StarshipsDialog;
