import React from "react";
import { BusinessContainer } from "./BusinessDetailStyle";
import BusinessDetailPageHeader from "../../../Components/BusinessDetailPageHeader";
import InvestmentProgress from "../../../Components/InvestmentProgress";
import BusinessTabs from "../../../Components/BusinessTabs";

const BusinessDetailPage = () => {
  return (
    <BusinessContainer>
      <BusinessDetailPageHeader />
      <InvestmentProgress />
      <BusinessTabs />
    </BusinessContainer>
  );
};

export default BusinessDetailPage;
