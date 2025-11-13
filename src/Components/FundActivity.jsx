import React from "react";
import { FundActivity_container } from "./FundActivityStyle";
import { useNavigate } from "react-router-dom";

const FundActivity = ({ funding }) => {
  const navigate = useNavigate();

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
              <h3>{inv.businessOwnerName}</h3>
              <p>{inv?.businessName}</p>
              <p>{inv?.businessModel}</p>
              <small>{inv.industry}</small>
            </div>
            <div className="right_sec">
              <div className="activeicon">{inv.status}</div>
              <div
                className="view_details"
                onClick={() =>
                  navigate(
                    `/dashboard/investor/business/${inv.businessName}/${inv.businessId}`
                  )
                }
              >
                View Details
              </div>
            </div>
          </div>

          <div className="investment">
            <div className="invest">
              <small>Investment Amount:</small>
              <p>
                &#8358;
                {Number(inv?.investmentAmount).toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="date">
              <small>Invested On</small>
              <p>
                {new Date(inv.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </FundActivity_container>
  );
};
export default FundActivity;
