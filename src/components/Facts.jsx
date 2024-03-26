import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import one from "../images/one.svg";
import two from "../images//two.webp";
import three from "../images/three.svg";
import four from "../images/four.webp";
import five from "../images/five.webp";
import six from "../images/six.webp";
import { Link } from "react-router-dom";

const Facts = () => {
  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Box className="facts">
      <Grid container className="container">
        <Grid item xs={11} lg={4.3}>
          <h2>Facts</h2>
          <p>
            We are a group of technical experts, gathered to provide our
            services at competitive prices and with higher quality. Where we
            developed and created many programs that helped their owners to
            perform their tasks easier, faster and more efficiently. We are
            working on the latest and most reliable technology to ensure great
            competition for our customers.
          </p>
          <Box className="images">
            <Box className="imgs">
              <h2 style={{ marginLeft: "21px" }}>Our Partners</h2>

              <Box
                className="box"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CardMedia component="img" image={one} />
                  <CardMedia component="img" image={two} />
                  <CardMedia component="img" image={three} />
                </Box>
              </Box>
              <Box className="box">
                <CardMedia component="img" image={four} />
                <CardMedia component="img" image={five} />
                <CardMedia component="img" image={six} />
              </Box>
            </Box>
          </Box>
          <Grid item>
            <Link to="/about" className="fact-one" onClick={toTops}>
              About us
            </Link>
          </Grid>
        </Grid>

        <Grid
          item
          xs={11}
          lg={6}
          className="circles"
          sx={{ justifyContent: { xs: "center", lg: "flex-end" } }}
        >
          <Box className="row">
            <Box className="circle">
              <h2>24</h2>
              <p>Projects</p>
            </Box>
            <Box className="circle">
              <h2>25780800</h2>
              <p>Programming lines</p>
            </Box>
          </Box>
          <Box className="row">
            <Box className="circle">
              <h2>298</h2>
              <p>Happy customers</p>
            </Box>
            <Box className="circle">
              <h2>15</h2>
              <p>Years of work</p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Facts;
