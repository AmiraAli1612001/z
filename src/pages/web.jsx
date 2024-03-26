import { Box } from '@mui/material';
import React from 'react';
import macbook from "../images/MacBook.png"
import Top from '../components/top';
import Modern from '../components/modern';
const Web = () => {
    let data = {
        h1: "Own a website for you, your company, or your project, at very nominal prices!",
        p: "One of the largest companies that provide technical services, such as websites and moThe websites are considered one of the most important means that help to link people to each other, and to transfer and exchange information, it has great importance and indescribable, for this we find great demand from different types of people to create websites, whether public or specialized in what achieves public or private interest on Both.",
        link: "Learn more",
        img: macbook,
    }
    return (
        <Box className="web" >
                       <Top data={data} />
                       <Modern/>
        </Box>
    );
}

export default Web;
