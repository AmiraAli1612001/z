import { Box, Tab, TabPanel, TabList, TabContext } from "@mui/material";
import React from "react";
import Top from "../components/top";
import ssl from "../images/ssl_new.png";
import Certificate from "../components/certificate";
import SslWhat from "../components/sslWhat";
import Mytabs from "../components/mytabs";

const Ssl = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let data = {
    h1: "SSL Certificates for all needs",
    p: "   Protect your users' data on the web, to increase their confidence in your website, at competitive rates starting at ",
    link: "",
    img: ssl,
  };
  return (
    <Box className="ssl">
      <Top data={data} />
      <Box className="our-plan">
        <h2>Our plans</h2>
        <p>Choose the plan that best suits your needs from the options below</p>
  <Mytabs/>
      </Box>
      <Certificate/>
      <SslWhat/>
    </Box>
  );
};

export default Ssl;
