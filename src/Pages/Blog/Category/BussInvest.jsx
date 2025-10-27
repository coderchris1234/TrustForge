import React from "react";
import { InvestContainer } from "./BussInvestStyle";
import { RiRectangleFill } from "react-icons/ri";
import { InsightData } from "../../../Config/Data";

const BussInvest = () => {
  return (
    <InvestContainer>
      <div className="Invest_wrapper">
        <section className="Top_section">
          <aside className="left_Container"></aside>
          <div className="Right_Container"></div>
        </section>
        <section className="Bottom_section"></section>
      </div>
    </InvestContainer>
  );
};

export default BussInvest;
