import React from "react";
import { ValuesContainer } from "./ValuesStyle";
import { ValueInfo } from "../../Config/Data";

const Values = () => {
  return (
    <ValuesContainer>
      <div className="Value_wrapper">
        <div className="Value_header_text">
          <h1>Our Core Values</h1>
          <p>The principle that guide everything we do</p>
        </div>
        <article className="Value_card">
          {ValueInfo?.map((item) => (
            <div className="Value_card_item">
              <div key={item.title} className="Value_card_item">
                <div className="Value_image_holder">{item.image}</div>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </ValuesContainer>
  );
};

export default Values;
