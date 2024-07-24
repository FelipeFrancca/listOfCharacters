import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material";

interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
}

interface SpeciesDialogProps {
  open: boolean;
  onClose: () => void;
  species: Species | null;
  characters: Character[];
}

const SpeciesDialog: React.FC<SpeciesDialogProps> = ({ open, onClose, species, characters }) => {
  if (!species) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Species</DialogTitle>
      <DialogContent>
        <Typography variant="h6">{species.name}</Typography>
        <Typography><strong>Classification:</strong> {species.classification}</Typography>
        <Typography><strong>Designation:</strong> {species.designation}</Typography>
        <Typography><strong>Average Height:</strong> {species.average_height}</Typography>
        <Typography><strong>Skin Colors:</strong> {species.skin_colors}</Typography>
        <Typography><strong>Hair Colors:</strong> {species.hair_colors}</Typography>
        <Typography><strong>Eye Colors:</strong> {species.eye_colors}</Typography>
        <Typography><strong>Average Lifespan:</strong> {species.average_lifespan}</Typography>
        <Typography><strong>Language:</strong> {species.language}</Typography>
        <Typography><strong>Characters:</strong></Typography>
        {species.people.map((characterUrl) => {
          const characterId = parseInt(characterUrl.split("/").filter(Boolean).pop() || "0", 10);
          const character = characters.find((char) => char.id === characterId);
          return <Typography key={characterId}>{character ? character.name : `Character ${characterId}`}</Typography>;
        })}
        <Button variant="contained" onClick={onClose} color="error" fullWidth>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default SpeciesDialog;
