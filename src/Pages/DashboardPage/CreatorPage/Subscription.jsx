import React, { useState } from "react";
import SubcriptionCard from "../../../Components/SubcriptionCard";
import { SubscriptionPlans } from "../../../Config/Data";
import { SubHeader, SubCon, FrequentQue } from "./SubscriptionStyle";
import { SubscriptionDate } from "./SubscriptionStyle";

const Subscription = () => {
  const [planType, setPlanType] = useState("monthly");

  // Adjust price dynamically based on plan type
  const displayedPlans = SubscriptionPlans.map((plan) => ({
    ...plan,
    displayPrice: planType === "monthly" ? plan.price : plan.yearlyPrice,
  }));
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
        <p
          onClick={() => setPlanType("monthly")}
          className={planType === "monthly" ? "active" : ""}
        >
          Monthly
        </p>
        <p
          onClick={() => setPlanType("annual")}
          className={planType === "annual" ? "active" : ""}
        >
          Annual
        </p>
      </SubscriptionDate>
      <SubCon>
        {displayedPlans.map((sub) => (
          <SubcriptionCard key={sub.id} {...sub} planType={planType} />
        ))}
      </SubCon>
      <FrequentQue>
        <h3>Frequently Asked Questions</h3>
        <p>Can i change my plan later?</p>
        <span>
          Yes, you can upreade or downgrade your plan at any time. Changes take
          effect immediatetly for upgrades or at the end of your billing cycle
          for downgrades.
        </span>
        <p>How does the billing work?</p>
        <span>
          You’ll be billed monthly on the date you subscribe. Annual plans offer
          significant savings.
        </span>
        <p>How does the promotion work?</p>
        <span>
          Your business will be featured in search results, homepage rotations,
          and sent to matched investors based on your chosen plan tier. Higher
          tiers get more visibility and targeted outreach
        </span>
        <p>Can i cancel anytime?</p>
        <span>
          Yes there are no long term commitments. You can cancel at any time and
          you’ll retain access until the end of your current billing period.
        </span>
      </FrequentQue>
    </div>
  );
};

export default Subscription;
