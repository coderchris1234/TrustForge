import React from "react";
import { KycContainer } from "./KycVerification2Style";

const KycVerification2 = () => {
  return (
    <KycContainer>
      <div className="Kyc_text_heading">
        <h3>Kyc Verification</h3>
        <p>Complete your Kyc verification to unlock more features</p>
      </div>

      <section className="why_verification">
        <h3>Why KYC Verfification</h3>
        <ul className="Verify_listing">
          <li>Build trust with startups through verified credentials </li>
          <li>Access premium features and detailed business information </li>
          <li>Increase visibility in search results and recommendations </li>
          <li>
            Comply with regulatory requirements for financial transactions{" "}
          </li>
        </ul>
      </section>

      <section className="Kyc_steps"></section>
    </KycContainer>
  );
};

export default KycVerification2;
