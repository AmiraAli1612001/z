import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
const Mytabs = () => {
  let tab1 = [
    {
      title: "Positive SSL",
      price: "$15.99.",
      p: "Suitable for personal websites, blogs, and simple websites.",
    },
    {
      title: "Instant SSL",
      price: "$27.99.",
      p: "Suitable for commercial sites that requires users' data.",
    },
    {
      title: "Essential SSL",
      price: "$34.99.",
      p: "Suitable for personal sites, blogs and non-commercial sites",
    },
    {
      title: "Positive SSL Multi-domain",
      price: "$39.99.",
      p: "Suitable for multi-domain business websites. (Includes three domains).",
    },
    {
      title: "EV SSL",
      price: "$99.99.",
      p: "Suitable for large projects, stores and company websites.",
    },
  ];
  let tab2 = [
    {
      title: "Positive SSL",
      price: "$14.99.",
      p: "Suitable for personal websites, blogs, and simple websites.",
    },
    {
      title: "Instant SSL",
      price: "$25.99.",
      p: "Suitable for commercial sites that requires users' data.",
    },
    {
      title: "Essential SSL",
      price: "$32.99.",
      p: "Suitable for personal sites, blogs and non-commercial sites",
    },
    {
      title: "Positive SSL Multi-domain",
      price: "$38.99.",
      p: "Suitable for multi-domain business websites. (Includes three domains).",
    },
    {
      title: "EV SSL",
      price: "$97.99.",
      p: "Suitable for large projects, stores and company websites.",
    },
  ];
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          margin: "30px auto",
          maxWidth :"180px" , display :"flex" , justifyContent :"center", alignItems :"center",
          backgroundColor: "white",
        }}
      >
        <Tabs value={value} onChange={handleTabs} >
          <Tab label="Year 1"/>
          <Tab label="Year 2"  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid
          container
          sx={{
            width: { xs: "90vw", md: "70vw" },
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {tab1.map((item) => {
            return (
              <Grid
                item
                sx={{
                  width: "260px",
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  height: "260px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    color: "#777",
                    fontFamily: "sans-serif",
                    marginBottom: " 20px",
                  }}
                >
                  {item.title}
                </h2>
                <h1
                  style={{
                    fontSize: "50px",
                    color: "#999",
                    fontFamily: "sans-serif",
                    marginBottom: "20px",
                    position: "relative",
                    textAlign: "center",
                    fontWeight: "lighter",
                  }}
                >
                  {item.price}
                </h1>
                <p
                  style={{
                    fontSize: "13px",
                    color: " #aaa",
                    fontFamily: "Tajawal",
                    lineHeight: " 20px",
                  }}
                >
                  {item.p}
                </p>
              </Grid>
            );
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          sx={{
            width: { xs: "90vw", md: "70vw" },
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {tab2.map((item) => {
            return (
              <Grid
                item
                sx={{
                  width: "260px",
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  height: "260px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    color: "#777",
                    fontFamily: "sans-serif",
                    marginBottom: " 20px",
                  }}
                >
                  {item.title}
                </h2>
                <h1
                  style={{
                    fontSize: "50px",
                    color: "#999",
                    fontFamily: "sans-serif",
                    marginBottom: "20px",
                    position: "relative",
                    textAlign: "center",
                    fontWeight: "lighter",
                  }}
                >
                  {item.price}
                </h1>
                <p
                  style={{
                    fontSize: "13px",
                    color: " #aaa",
                    fontFamily: "Tajawal",
                    lineHeight: " 20px",
                  }}
                >
                  {item.p}
                </p>
              </Grid>
            );
          })}
        </Grid>
      </TabPanel>
    </Box>
  );
  function TabPanel(props) {
    const { children, value, index } = props;
    return (
      <Box>
        {value === index && (
          <Box>
            <h1>{children}</h1>
          </Box>
        )}
      </Box>
    );
  }
};

export default Mytabs;
