import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Top from "../components/top";
import { Link } from "react-router-dom";

const Contact = () => {
  let data = {
    h1: "Contact us",
    p: "To contact us or inquire, please use one of the following methods:",
    p2: "In the meantim, we're offering Web & Mobile Development and Maintenance services, Designing & Video Editting, Domain Registration and SSL Certifications.",
  };

  return (
    <Box className="contact">
      <Header />
      <Top data={data} />

      <Box className="form">
        <Grid container className="pa" >
          <Grid item xs={11} md={8.5} > 
            <form >
              <h2>Send us a message</h2>
              <p>
                Please fill in the fields below making sure to write your phone
                number (with the country code) and your email address well.
              </p>
              <Grid container className="form-container">
                <Grid item xs={11} md={5}>
                  <label>Full name</label>
                  <input type="text" placeholder="type your full name" />
                </Grid>
                <Grid item  xs={11} md={5}>
                  <label>Email Address</label>
                  <input type="email" placeholder="type your email address" />
                </Grid>
                <Grid item  xs={11} md={5}>
                  <label>phone number</label>
                  <input type="text" placeholder="type your phone number" />
                </Grid>
                <Grid item  xs={11} md={5}>
                  <label>subject</label>
                  <input type="text" placeholder="type the message subject" />
                </Grid>
                <Grid item  xs={11} >
                  <label>message body</label>
                  <textarea placeholder="Message goes here" style={{width :"100%"}}></textarea>
                </Grid>
                <Grid item  xs={11} >
                  <p className="light">
                    By pressing the "Send" button below, you acknowledge your
                    read, understand and agree to{" "}
                    <Link to="/en/privacy">Terms &amp; Conditions</Link> and all
                    the details mentioned on the{" "}
                    <Link to="/en/privacy">Privacy</Link> page.
                  </p>
                  <input type="submit" value="Send" />
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={11} md={3.5} className="back" >
            <h2>Contact Information</h2>

            <Box className="itemscon">
              <Box className="peritem">
                <Box className="icon">
                  <i className="fa fa-map-marker-alt"></i>
                </Box>
                <Box className="text">
                  24-26 Arcadia Avenue <br /> Dephna House #105 <br /> London,
                  Greater London <br /> United Kingdom <br /> N3 2JU
                </Box>
              </Box>
              <Box className="peritem">
                <Box className="icon">
                  <i className="fa fa-envelope"></i>
                </Box>
                <Box className="text">
                  <Link href="mailto:info@gredev.io">info@gredev.io</Link>
                </Box>
              </Box>
              <Box className="peritem">
                <Box className="icon">
                  <i className="fa fa-phone"></i>
                </Box>
                <Box className="text">
                  <Link dir="ltr" to="tel:00442045242360">
                    +44 20 4524 2360
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box className="social">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-whatsapp"></i>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
