import { Box } from "@mui/material";
import React from "react";

const Certificate = () => {
  return (
    <Box className="certificate">
      <h2>What is an SSL certificate?</h2>
      <p style={{width :{xs : "90vw" , md : "80vw"}}}> 
        An SSL Certificate acts as a third party to assure the security of your
        website. Whereas, obtaining this certificate adds an additional layer of
        protection for the data of your visitors, or the so-called Secure Socket
        Layer, which is originally an acronym for the word SSL. Also, obtaining
        this certificate is essential for any company that collects information
        from its users.
      </p>
      <p>
        SSL certificates provide different levels of security, depending on the
        level of protection and the security features that your website and its
        users need. Obtaining this certificate for your site adds several
        features, some of which are visible, such as changing the website link
        to a link that starts with HTTPS://, the appearance of a green lock icon
        next to your website links, and many other invisible features that we
        have covered in the above section.
      </p>
      <p>
        No matter what level of security you choose, users will realize that
        your site is safe, and this in turn will increase your visitors'
        confidence in your brand or the services you offer.
      </p>
    </Box>
  );
};

export default Certificate;
