import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logos from "../images/logos.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Box className="footer">
      <svg
        className="svg"
        width="287"
        height="296"
        viewBox="0 0 287 296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="287" height="296" fill="none"></rect>
        <g filter="url(#filter0_d)">
          <path d="M87 112L87.5 0L227.5 87.5L87 112Z" fill="#D43ED7"></path>
          <path d="M87 112L87.5 0L0 140L87 112Z" fill="#DF3EE3"></path>
          <path
            d="M140 227.5L87 112L227.5 87.5L140 227.5Z"
            fill="#922D9D"
          ></path>
          <path d="M0 140L87 112L140 227.5L0 140Z" fill="#9432AA"></path>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="286.5"
            height="295.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="31" dy="40"></feOffset>
            <feGaussianBlur stdDeviation="14"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
      <Grid container className="footer-container">
        <Grid item className="item" xs={10} md={3}>
          <h5>About us</h5>
          <hr />
          <p>
            We are team of developers and designers work together with the
            experience, efficiency and creativity in programming and design, to
            presenting our business differently around the world.
          </p>
          <p>
            "gredev" is a brand of "GRE DEVELOPMENT LTD". Registered in England
            and Wales No: "13031797".
          </p>
          <p>Address: 7 Coronation Road, London, United Kingdom, NW10 7PQ</p>
          <hr />
          <span>Visit us on social media</span>
          <Box className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <WhatsAppIcon />
          </Box>
          <span>Or call us on:</span>
          <Link to="#">+44 20 4524 2360</Link>
          <span>Or you can email us on:</span>
          <Link to="#">info@gredev.io</Link>
        </Grid>
        <Grid item className="item" xs={10} md={3}>
          <h5>Sitemap</h5>
          <hr />
          <Link to="/terms-conditions" onClick={toTops}>
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" onClick={toTops}>
            Privacy Policy
          </Link>
          <Link to="/Refund-Policy" onClick={toTops}>
            Refund Policy
          </Link>
          <Link to="/cancellation" onClick={toTops}>
            Cancellation Policy
          </Link>
          <Link to="/about" onClick={toTops}>
            About Us
          </Link>
          <Link to="/projects" onClick={toTops}>
            Projects
          </Link>
          <Link to="/contact" onClick={toTops}>
            Contact Us
          </Link>
          <Link to="/web-development" onClick={toTops}>
            Web Development
          </Link>
          <Link to="/App-developments" onClick={toTops}>
            Apps Development
          </Link>
          <Link to="/domains" onClick={toTops}>
            Register domain
          </Link>
          <Link to="/transfer" onClick={toTops}>
            Transfer domain
          </Link>
        </Grid>
        <Grid item className="item" xs={10} md={3}>
          <h5>Important links</h5>
          <hr />
          <Link to="/web-development" onClick={toTops}>
            Websites
          </Link>
          <Link to="/App-developments" onClick={toTops}>
            Mobile Apps
          </Link>
          <Link to="/ssl-certificates" onClick={toTops}>
            SSL Certificates
          </Link>
          <Link to="/domains" onClick={toTops}>
            Domains
          </Link>
          {/* <Link>IP Geolocation</Link>
          <Link>WHOIS</Link>
          <Link>Timestamp Converter</Link>
          <Link>SSL Checker</Link>
          <Link>MD5 Encrypter</Link> */}
        </Grid>
      </Grid>
      <Box className="logos">
        <p>Payment Methods:</p>
        <CardMedia component="img" image={logos} />
        <p>
          @ 2020 <Link>GRE Development LTD</Link>. All rights reserved.
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
