import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material";

interface Vehicle {
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
  vehicle_class: string;
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

interface VehiclesDialogProps {
  open: boolean;
  onClose: () => void;
  vehicles: Vehicle[] | null;
  characters: Character[];
}

const VehiclesDialog: React.FC<VehiclesDialogProps> = ({ open, onClose, vehicles, characters }) => {
  if (!vehicles) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Vehicles</DialogTitle>
      <DialogContent>
        {vehicles.map((vehicle, index) => (
          <div key={index}>
            <Typography variant="h6">{vehicle.name}</Typography>
            <Typography><strong>Model:</strong> {vehicle.model}</Typography>
            <Typography><strong>Manufacturer:</strong> {vehicle.manufacturer}</Typography>
            <Typography><strong>Cost in Credits:</strong> {vehicle.cost_in_credits}</Typography>
            <Typography><strong>Length:</strong> {vehicle.length}</Typography>
            <Typography><strong>Max Atmosphering Speed:</strong> {vehicle.max_atmosphering_speed}</Typography>
            <Typography><strong>Crew:</strong> {vehicle.crew}</Typography>
            <Typography><strong>Passengers:</strong> {vehicle.passengers}</Typography>
            <Typography><strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}</Typography>
            <Typography><strong>Consumables:</strong> {vehicle.consumables}</Typography>
            <Typography><strong>Vehicle Class:</strong> {vehicle.vehicle_class}</Typography>
            <Typography><strong>Pilots:</strong></Typography>
            {vehicle.pilots.map((characterUrl) => {
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

export default VehiclesDialog;
