import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Cancel = () => {
    return (
       <Box className ="cancel">
        <Header/>
     <Box className="content"   sx={{padding:{xs :"30px" , md :"100px"}}}>
           <h1>Cancellation Policy</h1>
           <p>You have the right to cancel all services we provide to you if you are not happy with your experience with them. But according to certain conditions that suit our work environment and the interest of our customers.</p>
        
           <p>Canceling a service request may not necessarily mean returning money, please review the <Link to="/en/return-and-refund">Refund Policy</Link> page for more information about the possibility of returning the money paid for the purchase of a specific service.</p>
        
           <p>You can cancel a request for a specific service by sending a message to the following email address: <Link to="mailto:info@gredev.io">info@gredev.io</Link>. Your service request will be canceled within two (2) working days and we will inform you after canceling it.</p>
           <p>Note: There is no fee for canceling the services provided to you.</p>
           <hr />
           <p className="light">Last update: 23 November 2020</p>
     </Box>
       </Box>
    );
}

export default Cancel;
