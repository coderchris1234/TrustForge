import React from "react";
import { FundContainer } from "./FundStyle";
import { FundNum } from "../Config/Data";

const Fund = () => {
  return (
    <FundContainer>
      <div className="Fund_page_wrapper">
        {FundNum?.map((item) => (
          <article className="Fund_num">
            <h1>{item.Number}</h1>
            <p>{item.Details}</p>
          </article>
        ))}
      </div>
    </FundContainer>
  );
};

export default Fund;
