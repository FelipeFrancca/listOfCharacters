import React, { useState, useEffect } from "react";
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
  const [pilotNames, setPilotNames] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    if (starships) {
      const fetchPilots = async () => {
        const allPilotUrls = starships.flatMap(starship => starship.pilots);
        const uniquePilotUrls = Array.from(new Set(allPilotUrls));

        const pilotPromises = uniquePilotUrls.map(async (pilotUrl) => {
          const response = await fetch(pilotUrl);
          const data = await response.json();
          const pilotId = parseInt(pilotUrl.split("/").filter(Boolean).pop() || "0", 10);
          return { id: pilotId, name: data.name };
        });

        const pilotsData = await Promise.all(pilotPromises);
        setPilotNames(pilotsData);
      };

      fetchPilots();
    }
  }, [starships]);

  const getPilotName = (pilotId: number) => {
    const pilot = pilotNames.find(pilot => pilot.id === pilotId);
    return pilot ? pilot.name : `Pilot ${pilotId}`;
  };

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
            {starship.pilots.map((pilotUrl) => {
              const pilotId = parseInt(pilotUrl.split("/").filter(Boolean).pop() || "0", 10);
              return <Typography key={pilotId}>{getPilotName(pilotId)}</Typography>;
            })}
          </div>
        ))}
        <Button variant="contained" onClick={onClose} color="error" fullWidth>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default StarshipsDialog;
