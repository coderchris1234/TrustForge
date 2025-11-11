import React from "react";
import { FundActivity_container } from "./FundActivityStyle";
const FundActivity = ({ funding }) => {
  const investments = funding?.investments;

  if (investments.length === 0) {
    return (
      <FundActivity_container>
        <p>No active investments yet.</p>
      </FundActivity_container>
    );
  }

  return (
    <FundActivity_container>
      {investments.map((inv, index) => (
        <div className="sec_wrapper" key={index}>
          <div className="tittle">
            <div className="left_sec">
              <h3>{inv.businessName}</h3>
              <small>{inv.industry}</small>
            </div>
            <div className="right_sec">
              <div className="activeicon">{inv.status}</div>
              <div className="view_details">View Details</div>
            </div>
          </div>

          <div className="investment">
            <div className="invest">
              <small>Investment</small>
              <p>{inv.amount}</p>
            </div>
            <div className="date">
              <small>Invested On</small>
              <p>{inv.investTime}</p>
            </div>
          </div>
        </div>
      ))}
    </FundActivity_container>
  );
};
export default FundActivity;
