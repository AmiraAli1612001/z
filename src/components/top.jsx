import { Box, CardMedia, Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Top = (props) => {
  let navigate = useNavigate()
  return (
    <Box>
      <Header />

      <Box className="home">
        <Grid
          container
          className="home-container"
          sx={{width:{xs :"90vw" , md :"80vw"}}}
        >
          <Grid
            item
            xs={10}
            md={6}
            lg={6}
            className="title"
            // sx={{margin : {xs : "0px" , md : "0px 100px"}}}
          >
            <h1>{props.data.h1}</h1>
            <p style={{color:"#ffffffb9"}} className="p-after">{props.data.p}</p>
            <p style={{color:"#ffffffb9"}}>{props.data.p2}</p>

            <Link  to={props.data.path}>
              {props.data.link}
              <ArrowForwardIosIcon />
            </Link>
          </Grid>
          <Grid item xs ={10} md={5} sx={{display :{xs:"none" , md :"flex"} , justifyContent :"flex-end" , alignItems :"center"}}>
            <CardMedia component="img" image={props.data.img} sx={{width :{md :"400px", lg : "450px"}}} />
          </Grid>

          <Box className="effect"></Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Top;
