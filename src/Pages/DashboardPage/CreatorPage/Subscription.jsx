import React from "react";
import SubcriptionCard from "../../../Components/SubcriptionCard";

const Subscription = () => {
  return (
    <div>
      <SubcriptionCard />
    </div>
import { SubscriptionContainer } from "./SubscriptionStyle";

const Subscription = () => {
  return (
    <SubscriptionContainer>
      <div className="SubscriptionHeading"></div>
    </SubscriptionContainer>
  );
};

export default Subscription;
