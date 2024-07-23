import React from "react";
import { Box } from "@mui/material";
import "../../../assets/styles/home.css";
import PeopleList from "./components/peopleList";
import starWarsLogo from '../../../assets/images/starWarsLogo.png';

const Home: React.FC = () => {
  return (
    <Box className="flex justify-center items-center flex-col">
      <img src={starWarsLogo} alt="Logo" />
      <PeopleList/>
    </Box>
  );
}

export default Home;
