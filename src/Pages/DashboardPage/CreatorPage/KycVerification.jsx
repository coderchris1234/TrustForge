import React from "react";
import { KycContainer } from "./KycVerificationStyle";

const KycVerification = () => {
  return (
    <KycContainer>
      <h2>KYC Verification</h2>
      <p>Complete your KYC verification to unlock more features</p>
      <div className="WhyKyc">
        <p>Why Kyc verification</p>
        <ul>
          <li>Build trust with investors through verified credentials</li>
          <li>Access premium features and detailed business information</li>
          <li>Increase visibility in search results and recommendations</li>
          <li>
            Comply with regulatory requirements for financial transactions
          </li>
        </ul>
      </div>
    </KycContainer>
  );
};

export default KycVerification;
