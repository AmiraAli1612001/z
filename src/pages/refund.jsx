import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Refund = () => {
  return (
    <Box className="refund">
      <Header />
      <Box className="content"   sx={{padding:{xs :"30px" , md :"100px"}}}>
        <h1>Refund Policy</h1>
        <p>
          Thank you for purchasing one of our services. We hope that you will be
          happy to do business with us by purchasing one of our services. In the
          event that you are not happy with your purchase of a service for any
          reason, you can submit a return request according to the conditions set
          forth below.
        </p>
        <p>* Please note that not all of our services are returnable.</p>
        <h2>Return period</h2>
        <p>
          In general, apart from products that are excluded from the return
          process, you must submit a return request within seven (7) days from the
          day the invoice was issued.
        </p>
        <h2>Return process</h2>
        <p>
          You can submit a return request by sending an email to our Customer
          Service Center at the following address:{" "}
          <Link to="mailto:refund@gredev.io">refund@gredev.io</Link> which
          includes:
        </p>
        <ol>
          <li>
            <p>Your order number; And</p>
          </li>
          <li>
            <p>A copy of the invoice payment.</p>
          </li>
        </ol>
        <p>
          The process of responding to the request may take a maximum of three (3)
          days, and this response will include information regarding your request
          whether it has been approved or not (based on the conditions described
          below according to each service), and if it is approved, access to the
          service will be withdrawn. That you have requested a full refund (you
          will not be able to manage / control the service that you requested to
          return) and start the process of returning the amount according to the
          principles agreed upon in this return policy page. The refund process
          may take up to fourteen (14) days from the date of submitting your
          refund request. It may take 1-2 business days for funds to appear on
          your card (duration depends on the card provider).
        </p>
        <h3>
          1. Programming, Development, designing and maintaining websites and
          mobile applications services
        </h3>
        <p>
          You can cancel the process at any time you like, but you cannot refund
          the amount that was paid (the first and second payments), because your
          sending the first payment (or any amount related to this service) is
          your absolute acceptance of the{" "}
          <a href="/en/terms">Terms &amp; Conditions</a> of GRE Development LTD,
          in which this condition was mentioned in Article 3 (3) of the section
          "Terms and conditions for programming, design and maintenance services".
        </p>
        <h3>2. Domains reservation, renewal and transfer services</h3>
        <p>
          As for the reservation and renewal, you can cancel it, but you cannot
          get your money back because the reservation and renewal process is an
          immediate process in which your request is executed upon completion of
          the payment process. While the domain transfer process, you can request
          to retract and return the amount, but provided that the status of the
          request is not "approved."
        </p>
        <p>
          * Note: When a request is made to transfer one of your domains, the
          request will be reviewed and audited by the company’s employees and then
          its status will be determined. After approval by the company’s staff,
          the status of the request will appear as “Approved” and this is the case
          that we intended to clarify in the previous paragraph.
        </p>
        <h3>3. Design, video editing and montage services</h3>
        <p>
          You can cancel it, but without refunding the amount on which the staff
          began to work.
        </p>
        <h3>4. Services for reservation and renewal of SSL Certificates</h3>
        <p>
          You can abandon the service, but it is not possible to return the money
          because this process is one of the immediate operations that is executed
          as soon as you pay the amount.
        </p>
        <hr />
        <p className="light">Last update: 23 November 2020</p>
      </Box>
    </Box>
  );
};

export default Refund;
