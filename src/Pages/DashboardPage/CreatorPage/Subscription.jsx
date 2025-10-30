import React from "react";
import SubcriptionCard from "../../../Components/SubcriptionCard";
import { SubscriptionPlans } from "../../../Config/Data";
import { SubHeader, SubCon } from "./SubscriptionStyle";
import { SubscriptionDate } from "./SubscriptionStyle";

const Subscription = () => {
  return (
    <div>
      <SubHeader>
        <p>Promote Your Business</p>
        <span>
          Get your business in front of active investors. Choose the plan that
          fits your fundraising goals.
        </span>
      </SubHeader>

      <SubscriptionDate>
        <p>Monthly</p>
        <p className="an">Annual</p>
      </SubscriptionDate>
      <SubCon>
        {SubscriptionPlans.map((sub) => (
          <SubcriptionCard key={sub.id} {...sub} />
        ))}
      </SubCon>
    </div>
  );
};

export default Subscription;
