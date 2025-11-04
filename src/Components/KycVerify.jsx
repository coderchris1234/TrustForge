import React from "react";
import { KycVerifyContainer } from "./KycVerifyStyle";

const KycVerify = () => {
  return (
    <KycVerifyContainer>
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

      <section className="Profile_photo_kyc">
        <h3>Personal Information</h3>

        <div className="Professional_photo">
          <h3>Profile Photo*</h3>
          <div className="Photo_img">
            <img src="" />
            <div></div>
          </div>
          <span>Upload a professional photo</span>
        </div>

        <article className="Photo_input">
          <div className="Input_kyc">
            <label>full name</label>
            <input type="text" />
          </div>
          <div className="Input_kyc">
            <label>full name</label>
            <input type="text" />
          </div>
        </article>
      </section>
    </KycVerifyContainer>
  );
};

export default KycVerify;
