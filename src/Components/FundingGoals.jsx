import React from "react";
// import { funding } from "../Config/Data";
import { Funding_container } from "./FundingGoalsStyle";
import { CiBellOn } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
const FundingGoals = ({ funding }) => {
  // console.log("funding in goals", funding);
  return (
    <Funding_container>
      <div className="funding_wrapper">
        <div className="total_wrapper">
          <div className="total">Total Invested</div>
          <div className="sign">
            <TbCurrencyNaira size={40} />
          </div>
        </div>
        <div className="amount">
          {Number(funding?.totalInvestment).toLocaleString("en-NG", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
      <div className="funding_wrapper">
        <div className="total_wrapper">
          <div className="total">Active Investment</div>
          <div className="sign">
            <CiBellOn size={40} />
          </div>
        </div>
        <div className="amount">{funding?.activeInvestments}</div>
      </div>
    </Funding_container>
  );
};

export default FundingGoals;
