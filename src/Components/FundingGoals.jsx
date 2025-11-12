import React from "react";
// import { funding } from "../Config/Data";
import { Funding_container } from "./FundingGoalsStyle";
const FundingGoals = ({ funding }) => {
  // console.log("funding in goals", funding);
  return (
    <Funding_container>
      <div className="funding_wrapper">
        <div className="total_wrapper">
          <div className="total">Total Invested</div>
          <div className="sign">₦</div>
        </div>
        <div className="amount">{funding?.totalInvestment}</div>
      </div>
      <div className="funding_wrapper">
        <div className="total_wrapper">
          <div className="total">Active Investment</div>
          <div className="sign">₦</div>
        </div>
        <div className="amount">{funding?.activeInvestments}</div>
      </div>
    </Funding_container>
  );
};

export default FundingGoals;
