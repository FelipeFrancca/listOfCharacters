import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material";

interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
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

interface FilmDialogProps {
  open: boolean;
  onClose: () => void;
  films: Film[] | null;
  characters: Character[];
}

const FilmDialog: React.FC<FilmDialogProps> = ({ open, onClose, films, characters }) => {
  if (!films) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Films</DialogTitle>
      <DialogContent>
        {films.map((film, index) => (
          <div key={index}>
            <Typography variant="h6">{film.title}</Typography>
            <Typography><strong>Episode:</strong> {film.episode_id}</Typography>
            <Typography><strong>Director:</strong> {film.director}</Typography>
            <Typography><strong>Producer:</strong> {film.producer}</Typography>
            <Typography><strong>Release Date:</strong> {film.release_date}</Typography>
            <Typography><strong>Opening Crawl:</strong> {film.opening_crawl}</Typography>
            <Typography><strong>Characters:</strong></Typography>
            {film.characters.map((characterUrl) => {
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

export default FilmDialog;
