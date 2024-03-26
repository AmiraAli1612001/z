import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import mobile from "../images/mobile.webp";
import Top from "../components/top";
import Choice from "../components/Choice";
import Facts from "../components/Facts";
import Owl from "../components/Owl";
import Ready from "../components/Ready";
import cy from "../images/cy.png";
import cy2 from "../images/cy2.png";
import et from "../images/et.png";
import web from "../images/web.webp";
import web2 from "../images/web2.webp";

const Projects = () => {
  let projects = [
    { img: cy, title: "cyber security website", type: "website" },
    { img: cy2, title: "cyber security website", type: "website" },
    { img: et, title: "Etisalate website", type: "website" },
    { img: web, title: "Frank And OaK", type: "website" },
    { img: web2, title: "Dropbox website", type: "website" },
  ];
  let data = {
    h1: "Our projects",
    p: "Here is a small part of our business in which we satisfied our customers and provided them with the best service,",
    p2 :"We're always publishing our latest projects on an ongoing basis in order to inform our customers of the achievements that we are achieving.",
    link: "contact us",
    img: mobile,
    path :"/contact"

  };
  return (
    <Box>
        <Box className=" projects">
          <Top data={data} />
          <Box  sx={{marginTop :"250px"}} className="container" >
            <Grid container className="row-project" sx={{display :"flex" , gap :"50px", flexWrap :"wrap" , justifyContent:"center" , alignItems :"center"}} >
        <Box  >
              <h2 className="our">Our Projects</h2>
        </Box>
        <Grid container className="row-project" sx={{display :"flex" , gap :"50px", flexWrap :"wrap" , justifyContent:"center" , alignItems :"center"}} >
              {projects.map((item) => {
                return (
                    <Grid item className="item" xs={10} sm={6} md={3} >
                        <CardMedia sx={{width :"100%", height :"250px"}} component="img" image={item.img} />
                        <Box className="layer">
                            <p>{item.title}</p>
                            <p>{item.type}</p>
                        </Box>
                    </Grid>
                );
              })}
              </Grid>
            </Grid>
          </Box>
          <Choice />
          <Facts />
          <Owl />
          <Ready />
        </Box>
    </Box>
  );
};

export default Projects;
