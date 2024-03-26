import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import mobile from "../images/mobile.webp";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Services from "../components/services";
import Ready from "../components/Ready";
import Choice from "../components/Choice";
import Facts from "../components/Facts";
import Owl from "../components/Owl";

import Top from "../components/top";

const Home = () => {
  let data = {
    h1: "GRE Development",
    p: "    One of the largest companies that provide technical services, such as websites and mobile applications development, maintenance services, and some other services such as SSL certificates and  domain registration.",
    link: "Contact us",
    img: mobile,
    path :"/contact"
  };
  return (
    <Box >
      <Top data = {data} />
      <Services />
      <Choice />
      <Facts />
      <Owl />
      <Ready />
    </Box>
  );
};

export default Home;
