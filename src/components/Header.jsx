import { Box, AppBar, Toolbar, Grid, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/gre-logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./drawer";
const Header = () => {
  let navigate = useNavigate();
  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  let headerLinks = [
    { text: "PROJECTS", path: "/projects", hover: "PROJECTS" },
    {
      text: "WEB DEVELOPMENT",
      path: "/web-development",
      hover: "WEB DEVELOPMENT",
    },
    {
      text: "APPS DEVELOPMENTS",
      path: "/App-developments",
      hover: "APPS DEVELOPMENTS",
    },
    {
      text: "SSL CERTIFICATES",
      path: "/ssl-certificates",
      hover: "SSL CERTIFICATES",
    },
    { text: "DOMAINS", path: "/domains", hover: "DOMAINS" },
  ];
  let [menu, setMenu] = useState(false);
  let [drawer, setDrawer] = useState(false);

  return (
    <Box>
      <Drawer drawer={drawer} setDrawer={setDrawer} />
      <AppBar>
        <Toolbar>
          <Grid container className="items">
            <Grid
              item
              className="item-one"
              md={2}
              onClick={() => {
                navigate("/");
              }}
            >
              <CardMedia component="img" image={logo} />
            </Grid>
            <Grid item className="links" lg={9}>
              {headerLinks.map((item, index) => {
                return (
                  <Box
                    className="relative-link"
                    key={index}
                    sx={{ display: { xs: "none", lg: "flex" } }}
                  >
                    <Link
                      to={item.path}
                      key={index}
                      className="not-animate"
                      onClick={toTops}
                      data-hover={item.hover}
                    >
                      {item.text}
                    </Link>
                  </Box>
                );
              })}
            </Grid>
            <Grid
              item
              md={1}
              className="item-three"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <LanguageIcon />
              <Box className="menu" sx={{ display: menu ? "block" : "none" }}>
                <p>EN</p>
                <p>AR</p>
              </Box>
            </Grid>
            <Grid
              item
              md={1}
              sx={{ display: { xs: "block", lg: "none" }, cursor: "pointer" }}
              onClick={() => {
                setDrawer(!drawer);
              }}
            >
              <MenuIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
