import { Box } from '@mui/material';
import React from 'react';

const SslWhat = () => {
    let circle =[
        {text  : "Protect sensitive data", color : "#18b99b"},
        {text  : "Activate HTTPS and lock next to your links", color : "#b96618"},
        {text  : "Compliance with PCI standards", color : "#efb111"},
        {text  : "Proof of website credibility", color : "#3677bf"},
        {text  : "Boosting your brand", color : "#f171e7"},
        {text  : "Increase your site's SEO advantage", color : "#9e69e4"},

    ]
    let icons = [
        {icon :<i class="fa fa-fingerprint"></i>,color :"#fd4f04", h3 :"High encryption level" , p : "The level of security that an SSL certificate provides is determined by the number of 'bits' used to generate the encryption key. Then this key is used to encrypt the data. Most of our SSL certificates use either 256-bit or 128-bit encryption, depending on the capabilities of your web browser and server. Both 256 bits and 128 bits are a strong data protection standard."},
        {icon :<i class="fa fa-headset"></i>,color :"#ff8904" , h3 :"Technical Support" , p : "Our support team is highly experienced in all areas that we offer, including SSL certificates. Where you can contact the support team whenever you want, in order to inquire about how to purchase your own certificate or to help you in installing or preparing it."},
        {icon : <i class="fab fa-safari"></i>,color :"#08a3d7" , h3 :"Support all browsers" , p : "These SSL certificates are carefully choosen by GRE experts to ensure they are compatible with all types of browsers. Our certificates are supported by all types of popular browsers, which means whatever type of browser you have and which browser your visitors are using, the SSL certificate we provide will be recognized without facing any problems."},
        {icon : <i class="fa fa-check"></i>,color :"#9fe400" , h3 :"SSL Trust Seal" , p : "It is a visual seal for your website, which you get when you purchase an SSL certificate. In fact, many website owners and managers buy an SSL certificate in order to obtain this seal. The shape of this stamp varies depending on the type of certificate issued, but all of them give the same meaning: 'This site is protected with an SSL certificate.'"},

    ]
    return (
       <Box className= "ssl-what">
        <h2>What is the benefit of obtaining an SSL certificate?</h2>
        <p>Obtaining an SSL certificate for your site adds several important features, such as:</p>
        <Box className="circles">
            {
                circle.map((item, index)=> {
                    return(
                        <Box  key={index} className="circle" sx={{backgroundColor : item.color , outline : `8px solid ${item.color}`}}>
                            <p>{item.text}</p>
                        </Box>
                    )
                } )
            }

        </Box>
        <hr />

        <h2>What will you get when purchasing an SSL certificate from our website?</h2>
        <p>Every SSL subscription issued from GRE will bring you the following great features.</p>

       <Box className="boxes">
         {
                 icons.map((item, index)=> {
                     return(
                         <Box className="box" key={index}>
                             <Box className="icon" sx={{color:item.color}}>
                                 {item.icon}
                             </Box>
                             <Box className="data">
                                 <h3>{item.h3}</h3>
                                 <p>{item.p}</p>
                             </Box>
                         </Box>
                     )
                 } )
             }
       </Box>
       </Box>
    );
}

export default SslWhat;
