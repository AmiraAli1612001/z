import { Box } from '@mui/material';
import React from 'react';
import mobile from "../images/mobile.webp";
import Top from '../components/top';
import Modern from '../components/modern';
import Choice from '../components/Choice';
import Facts from '../components/Facts';
import Owl from '../components/Owl';
import Ready from '../components/Ready';

const App = () => {
    let data = {
        h1: "Apps Design & Development",
        p: " Creating a mobile application for your business is the most important thing to do for being a well-known brand, so let's take a tour of our work in this field",
        link: "Learn more",
        img: mobile,
      };
    return (
        <Box className="app">
                      <Top data={data} />
                      <Modern/>
                      <Choice/>
                      <Facts/>
                      <Owl/>
                      <Ready/>


        </Box>
    );
}

export default App;
