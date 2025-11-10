// Professional.jsx
import React from "react";
import { Professional_container } from "./professionalStyle";

const Professional = () => {
  return (
    <Professional_container>
      <div className="comapny_header_kyc">
        <h2>Company Information</h2>
        <div className="kyc">From KYC</div>
      </div>

      <div className="details_row">
        <div className="left_col">
          <div className="field">
            <p>Company Name</p>
            <span>Venture Capital Partners</span>
          </div>

          <div className="field" style={{ marginTop: 18 }}>
            <p>Total Investments</p>
            <span>23</span>
          </div>

          <div className="field" style={{ marginTop: 18 }}>
            <p>Successful Exits</p>
            <span>7</span>
          </div>
        </div>

        <div className="right_col">
          <div className="field">
            <p>Investor type</p>
            <span>Venture Capital</span>
          </div>

          <div className="field" style={{ marginTop: 18 }}>
            <p>Preferred Sector</p>
            <span>Technology, Healthcare</span>
          </div>
        </div>
      </div>

      <div className="business_description">
        <h3>Business Description</h3>
        <span>
          Experienced investor with 15+ years in venture capital. Portfolio
          includes successful investments in AI, HealthTech, and FinTech
          startups.
        </span>
      </div>

      <div className="update_information">
        To update this information, Please contact support or resubmit your KYC
        verification.
      </div>
    </Professional_container>
  );
};

export default Professional;
