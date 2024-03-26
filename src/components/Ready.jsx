import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Ready = () => {
    return (
       <Box className="ready">
           <Box className="container">
             <h2>Are you ready to implement your project</h2>
             <p>New ideas need to be implemented quickly as our entrepreneurs race to invest every creative idea and turn it into a successful project. GRE has the experience and creativity to implement the ideas of its customers to enter the competition with the best successful projects.</p>
             <Link to="#">Contact us <ArrowForwardIosIcon /></Link>
           </Box>
       </Box>
    );
}

export default Ready;
