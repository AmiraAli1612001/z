import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const About = () => {
    return (
        <Box className="about">
<Header/>
<Box className="content"   sx={{padding:{xs :"30px" , md :"100px"}}}>
    <h1>About Us</h1>
    <p>We are a group of technical experts, gathered to provide our services at competitive prices and with higher quality. Where we developed and created many programs that helped their owners to perform their tasks easier, faster and more efficiently. We are working on the latest and most reliable technology to ensure great competition for our customers.</p>
    <h2>What distinguishes us:</h2>
    <ul>
    <li><p>Strong protection.</p></li>
    <li><p>We complete projects quickly</p></li>
    <li><p>Post-delivery services for projects.</p></li>
    <li><p>The use of the latest and most powerful technologies.</p></li>
    </ul>
    <h2>Our aspirations</h2>
    <p>We are looking to develop content and raise its level of professionalism in many aspects, to develop from its current situation to something more professional and thus become content of more useful for all disciplines.</p>
    
    <h2>Services</h2>
    <p>We're offering Web &amp; Mobile Development and Maintenance services, Designing &amp; Video Editting, Domain Registration and SSL Certifications.</p>
    
    <h2>Company registration</h2>
    <p>"gredev" is a brand of "GRE DEVELOPMENT LTD". Registered in England and Wales No: "13031797".</p>
    
    <h2>Contact information</h2>
    
    <p>To see the available contact methods, please kindly visit the "<Link to="/en/contact">Contact us</Link>" page.</p>
</Box>

        </Box>
    );
}

export default About;
