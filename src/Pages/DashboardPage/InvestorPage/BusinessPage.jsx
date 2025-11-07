import React from "react";
import BusinessPageProfile from "../../../Components/BusinessPageProfile";
import ProgressComponent from "../../../Components/InvestmentPage";
import DetailsSection from "../../../Components/DetailsSection";

const BusinessPage = () => {
  return (
    <div>
      <BusinessPageProfile />
      <ProgressComponent />
      <DetailsSection />
    </div>
  );
};

export default BusinessPage;
