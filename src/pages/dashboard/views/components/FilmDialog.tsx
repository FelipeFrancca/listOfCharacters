import React, { useState, useEffect } from "react";
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
  const [characterNames, setCharacterNames] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    if (films) {
      const fetchCharacters = async () => {
        const allCharacterUrls = films.flatMap(film => film.characters);
        const uniqueCharacterUrls = Array.from(new Set(allCharacterUrls));

        const characterPromises = uniqueCharacterUrls.map(async (characterUrl) => {
          const response = await fetch(characterUrl);
          const data = await response.json();
          const characterId = parseInt(characterUrl.split("/").filter(Boolean).pop() || "0", 10);
          return { id: characterId, name: data.name };
        });

        const charactersData = await Promise.all(characterPromises);
        setCharacterNames(charactersData);
      };

      fetchCharacters();
    }
  }, [films]);

  if (!films) return null;

  const getCharacterName = (characterId: number) => {
    const character = characterNames.find(char => char.id === characterId);
    return character ? character.name : `Character ${characterId}`;
  };

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
              return <Typography key={characterId}>{getCharacterName(characterId)}</Typography>;
            })}
          </div>
        ))}
        <Button variant="contained" onClick={onClose} color="error" fullWidth>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default FilmDialog;
