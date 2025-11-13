import React from "react";
import { SubcriptionCard_container } from "./SubscriptionStyle";
import MyPricing from "../../../Components/MyPricing";
const Subscription2 = () => {
  return (
    <SubcriptionCard_container>
      <div className="Subcription_text">
        <h1>Subscription Plans</h1>
        <p>Choose the perfect plan for your needs. </p>
      </div>
      <MyPricing />
      <div className="Ask_question_wrapper">
        <h2>Frequently Asked Questions</h2>
        <div className="change_plan">
          <h4>Can i change my plan later?</h4>
          <small>
            Yes, you can upreade or downgrade your plan at any time. Changes
            take effect immediatetly for upgrades orat the end of your billing
            cycle for downgrades.
          </small>
        </div>
        <div className="billing">
          <h4>How does the billing work?</h4>
          <small>
            You’ll be billed monthly on the date you subscribe. Annual plans
            offer significant savings.
          </small>
        </div>
        <div className="promotion">
          <h4>How does the promotion work?</h4>
          <small>
            Your business will be featured in search results, homepage
            rotations, and sent to matched investors based on your chosen plan
            tier. Higher tiers get more visibility and targeted outreach
          </small>
        </div>
        <div className="cancel">
          <h4>Can i cancel anytime?</h4>
          <small>
            Yes there are no long term commitments. You can cancel at any time
            and you’ll retain access until the end of your current billing
            period.
          </small>
        </div>
      </div>
    </SubcriptionCard_container>
  );
};

export default Subscription2;
