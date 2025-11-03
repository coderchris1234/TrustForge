import React from "react";
import { SavedFunds } from "../Config/Data";
import { FundActivity_container } from "./FundActivityStyle";
const FundActivity = () => {
  return (
    <FundActivity_container>
      {SavedFunds.map((sec, index) => (
        <div className="sec_wrapper" key={index}>
          <div className="tittle">
            <div className="left_sec">
              <h3>{sec.tittle}</h3>
              <small>{sec.tech}</small>
            </div>
            <div className="right_sec">
              <div className="activeicon">
                {sec.icon}
                {sec.active}
              </div>
              <div className="view_details">{sec.detail}</div>
            </div>
          </div>
          <div className="investment">
            <div className="invest">
              <small>{sec.investment}</small>
              <p>{sec.amount}</p>
            </div>
            <div className="equity">
              <small>{sec.equity}</small>
              <p>{sec.percent}</p>
            </div>
            <div className="date">
              <small>{sec.investtime}</small>
              <p>{sec.date}</p>
            </div>
            <div className="returns">
              <small>{sec.return}</small>
              <p>{sec.returns}</p>
            </div>
          </div>
        </div>
      ))}
    </FundActivity_container>
  );
};

export default FundActivity;
