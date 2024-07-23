import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Paper, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "../../../../assets/styles/peopleList.css";
import "../../../../assets/styles/index.css";

interface Character {
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
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

const PeopleList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<ApiResponse>("https://swapi.dev/api/people")
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        Swal.fire("Erro na busca, tente novamente.");
      });
  }, []);

  if (loading) {
    return (
      <Box className="flex justify-center items-center flex-col gap-2">
        <span className="loader"></span>
        <h1 className="text-3xl font-bold">Loading...</h1>
      </Box>
    );
  }

  return (
    <Box>
      <Paper id="paper" className="p-6 gap-8">
        <Typography variant="h4" className="mb-4 text-yellowSW"><strong>LIST OF CHARACTERS</strong></Typography>
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
            <Box
              key={character.name}
              className="bg-yellowSW p-4 rounded-lg shadow-md truncate hover:bg-yellowSWHover hover:cursor-pointer text-transform: capitalize"
            >
              <Typography variant="h6" className="mb-2">{character.name}</Typography>
              <Box className="flex justify-center items-center flex-col pt-5 pb-10"
            >
              <Typography><strong>Height:</strong> {character.height}</Typography>
              <Typography><strong>Mass:</strong> {character.mass}</Typography>
              <Typography><strong>Hair Color:</strong> {character.hair_color}</Typography>
              <Typography><strong>Skin Color:</strong> {character.skin_color}</Typography>
              <Typography><strong>Eye Color:</strong> {character.eye_color}</Typography>
              <Typography><strong>Birth Year:</strong> {character.birth_year}</Typography>
              <Typography><strong>Gender:</strong> {character.gender}</Typography>
              <Typography><strong>Homeworld:</strong></Typography>
              <Button variant="contained">Teste</Button>
              <Typography><strong>Films:</strong></Typography>
              <Button variant="contained">Teste</Button>
              <Typography><strong>Species:</strong></Typography>
              <Button variant="contained">Teste</Button>
              <Typography><strong>Vehicles:</strong></Typography>
              <Button variant="contained">Teste</Button>
              <Typography><strong>Starships:</strong></Typography>
              <Button variant="contained">Teste</Button>
              </Box>
              <Box className="flex justify-center items-end flex-col"
            >
              <Typography sx={{fontSize:"12px"}}><strong>Created:{new Date(character.created).toLocaleString()}</strong></Typography>
              <Typography sx={{fontSize:"12px"}}><strong>Edited:{new Date(character.edited).toLocaleString()}</strong></Typography>
              </Box>
              
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default PeopleList;
