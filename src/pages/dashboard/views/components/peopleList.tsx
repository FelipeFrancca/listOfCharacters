import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Paper } from "@mui/material";
import Swal from "sweetalert2";
import "../../../../assets/styles/peopleList.css";
import "../../../../assets/styles/index.css"

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
      <Box className="flex justify-center items-center flex-col gap-2"
      >
        <span className="loader"></span>
        <h1 className="text-3xl font-bold">Caregando...</h1>
      </Box>
    );
  }

  return (
    <Box>
      <Paper id="paper">
        <h1>Lista de personagens</h1>
        <ul>
          {characters.map((character) => (
            <li key={character.name}>
              <h2>{character.name}</h2>
              <p>
                <strong>Height:</strong> {character.height}
              </p>
              <p>
                <strong>Mass:</strong> {character.mass}
              </p>
              <p>
                <strong>Hair Color:</strong> {character.hair_color}
              </p>
              <p>
                <strong>Skin Color:</strong> {character.skin_color}
              </p>
              <p>
                <strong>Eye Color:</strong> {character.eye_color}
              </p>
              <p>
                <strong>Birth Year:</strong> {character.birth_year}
              </p>
              <p>
                <strong>Gender:</strong> {character.gender}
              </p>
              <p>
                <strong>Homeworld:</strong>{" "}
                <a href={character.homeworld}>Link</a>
              </p>
              <p>
                <strong>Films:</strong> {character.films.join(", ")}
              </p>
              <p>
                <strong>Species:</strong> {character.species.join(", ")}
              </p>
              <p>
                <strong>Vehicles:</strong> {character.vehicles.join(", ")}
              </p>
              <p>
                <strong>Starships:</strong> {character.starships.join(", ")}
              </p>
              <p>
                <strong>Created:</strong>{" "}
                {new Date(character.created).toLocaleString()}
              </p>
              <p>
                <strong>Edited:</strong>{" "}
                {new Date(character.edited).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </Paper>
    </Box>
  );
};

export default PeopleList;
