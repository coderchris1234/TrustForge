import React from "react";
import { Container } from "./InvestmentStyle";

const InvestmentType = ({ kyc }) => {
  return (
    <Container>
      <h3>Investment Type</h3>
      <p>{kyc?.investmentType}</p>
    </Container>
  );
};

export default InvestmentType;
