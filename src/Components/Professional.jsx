import React from "react";
import { Professional_container } from "./professionalStyle";

const Professional = ({ kyc }) => {
  return (
    <Professional_container>
      <div className="comapny_header_kyc">
        <div className="upper">
          <h2>Banking Informations</h2>
          <span>Encrypted</span>
        </div>
        <p className="secure">
          Secure: Banking details are encypted and only used for recieving
          investment funds through TRUSTFORGE platform
        </p>
      </div>

      <div className="details_row">
        <div>
          <div>
            <span>Bank Name</span>
            <p>{kyc?.bankName}</p>
          </div>
          <div>
            <span>Account Number</span>
            <p>{"*".repeat(6) + kyc?.accountNumber?.slice(6)}</p>
          </div>
          <div>
            <span>Account Type</span>
            <p>{kyc?.accountType}</p>
          </div>
        </div>
        <div>
          <span>Account Name</span>
          <p>{kyc?.accountName}</p>
        </div>
      </div>
      <div className="security">
        <p>
          For security reasons, full account details are hidden. To update
          banking information, please contact support
        </p>
      </div>

      {/* <div className="business_description">
        <h3>Business Description</h3>
        <span>
          Experienced investor with 15+ years in venture capital. Portfolio
          includes successful investments in AI, HealthTech, and FinTech
          startups.
        </span>
      </div> */}

      {/* <div className="update_information">
        To update this information, Please contact support or resubmit your KYC
        verification.
      </div> */}
    </Professional_container>
  );
};

export default Professional;
