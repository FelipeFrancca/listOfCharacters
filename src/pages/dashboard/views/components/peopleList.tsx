import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Paper, Typography} from "@mui/material";
import HomeworldDialog from "./HomeworldDialog";
import FilmDialog from "./FilmDialog";
import SpeciesDialog from "./SpeciesDialog";
import VehiclesDialog from "./VehiclesDialog";
import StarshipsDialog from "./StarshipsDialog";
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import "../../../../assets/styles/peopleList.css";
import "../../../../assets/styles/index.css";

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

const PeopleList: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [homeworldDialogOpen, setHomeworldDialogOpen] = useState(false);
  const [homeworld, setHomeworld] = useState<Homeworld | null>(null);
  const [filmDialogOpen, setFilmDialogOpen] = useState(false);
  const [films, setFilms] = useState<any[]>([]);
  const [speciesDialogOpen, setSpeciesDialogOpen] = useState(false);
  const [species, setSpecies] = useState<Species | null>(null);
  const [vehiclesDialogOpen, setVehiclesDialogOpen] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[] | null>(null);
  const [starshipsDialogOpen, setStarshipsDialogOpen] = useState(false);
  const [starships, setStarships] = useState<Starship[] | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people/");
        const charactersWithIds = response.data.results.map((character: Character, index: number) => ({
          ...character,
          id: index + 1,
        }));
        setCharacters(charactersWithIds);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  const openHomeworldDialog = async (homeworldUrl: string) => {
    try {
      const response = await axios.get(homeworldUrl);
      setHomeworld(response.data);
      setHomeworldDialogOpen(true);
    } catch (error) {
      console.error("Error fetching homeworld:", error);
    }
  };

  const closeHomeworldDialog = () => {
    setHomeworldDialogOpen(false);
    setHomeworld(null);
  };

  const openFilmDialog = async (filmUrls: string[]) => {
    try {
      const filmRequests = filmUrls.map((url) => axios.get(url));
      const filmResponses = await Promise.all(filmRequests);
      setFilms(filmResponses.map((res) => res.data));
      setFilmDialogOpen(true);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  const closeFilmDialog = () => {
    setFilmDialogOpen(false);
    setFilms([]);
  };

  const openSpeciesDialog = async (speciesUrl: string) => {
    try {
      const response = await axios.get(speciesUrl);
      setSpecies(response.data);
      setSpeciesDialogOpen(true);
    } catch (error) {
      console.error("Error fetching species:", error);
    }
  };

  const closeSpeciesDialog = () => {
    setSpeciesDialogOpen(false);
    setSpecies(null);
  };

  const openVehiclesDialog = async (vehicleUrls: string[]) => {
    try {
      const vehicleRequests = vehicleUrls.map((url) => axios.get(url));
      const vehicleResponses = await Promise.all(vehicleRequests);
      setVehicles(vehicleResponses.map((res) => res.data));
      setVehiclesDialogOpen(true);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const closeVehiclesDialog = () => {
    setVehiclesDialogOpen(false);
    setVehicles(null);
  };

  const openStarshipsDialog = async (starshipUrls: string[]) => {
    if (!isAuthenticated) {
      Swal.fire({
        title: 'Not Authenticated',
        text: 'Please log in to view starships.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
      return;
    }
    try {
      const starshipRequests = starshipUrls.map((url) => axios.get(url));
      const starshipResponses = await Promise.all(starshipRequests);
      setStarships(starshipResponses.map((res) => res.data));
      setStarshipsDialogOpen(true);
    } catch (error) {
      console.error("Error fetching starships:", error);
    }
  };

  const closeStarshipsDialog = () => {
    setStarshipsDialogOpen(false);
    setStarships(null);
  };

  return (
    <Box>
      {loading ? (
        <Box className="flex justify-center items-center flex-col gap-2">
        <span className="loader"></span>
        <h1 className="text-3xl font-bold text-yellowSW">Loading...</h1>
      </Box>
      ) : (
        <Paper id="paper" className="p-6 gap-8">
          <Typography variant="h4" className="mb-4 text-yellowSW"><strong>LIST OF CHARACTERS</strong></Typography>
          <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.map((character) => (
              <Box key={character.id} className="bg-yellowSW p-4 rounded-lg shadow-md truncate hover:bg-yellowSWHover hover:cursor-pointer text-transform: capitalize character-card">
                <Typography variant="h6">{character.name}</Typography>
                <Box className="flex justify-center items-center flex-col pt-5 pb-10">
                  <Typography><strong>Height:</strong> {character.height}</Typography>
                  <Typography><strong>Mass: </strong>{character.mass}</Typography>
                  <Typography><strong>Hair Color: </strong>{character.hair_color}</Typography>
                  <Typography><strong>Skin Color: </strong>{character.skin_color}</Typography>
                  <Typography><strong>Eye Color: </strong>{character.eye_color}</Typography>
                  <Typography><strong>Birth Year: </strong>{character.birth_year}</Typography>
                  <Typography><strong>Gender: </strong>{character.gender}</Typography>
                  <Box className="flex justify-center items-center flex-col pt-5 gap-5">
                  <Button variant="contained" onClick={() => openHomeworldDialog(character.homeworld)} color="error" fullWidth>View Homeworld</Button>
                  <Button variant="contained" onClick={() => openFilmDialog(character.films)} color="error" fullWidth>View Films</Button>
                  {character.species.length > 0 && <Button variant="contained" onClick={() => openSpeciesDialog(character.species[0])} color="error" fullWidth>View Species</Button>}
                  {character.vehicles.length > 0 && <Button variant="contained" onClick={() => openVehiclesDialog(character.vehicles)} color="error" fullWidth>View Vehicles</Button>}
                  {character.starships.length > 0 && <Button variant="contained" onClick={() => openStarshipsDialog(character.starships)} color="error" fullWidth>View Starships</Button>}
                  </Box>
                </Box>
                <Box className="flex justify-center items-end flex-col">
                  <Typography sx={{ fontSize: "12px" }}><strong>Created: {new Date(character.created).toLocaleString()}</strong></Typography>
                  <Typography sx={{ fontSize: "12px" }}><strong>Edited: {new Date(character.edited).toLocaleString()}</strong></Typography>
                </Box>
              </Box>
            ))}
            <HomeworldDialog open={homeworldDialogOpen} onClose={closeHomeworldDialog} homeworld={homeworld} characters={characters} />
            <FilmDialog open={filmDialogOpen} onClose={closeFilmDialog} films={films} characters={characters} />
            <SpeciesDialog open={speciesDialogOpen} onClose={closeSpeciesDialog} species={species} characters={characters} />
            <VehiclesDialog open={vehiclesDialogOpen} onClose={closeVehiclesDialog} vehicles={vehicles} characters={characters} />
            <StarshipsDialog open={starshipsDialogOpen} onClose={closeStarshipsDialog} starships={starships} characters={characters} />
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default PeopleList;
