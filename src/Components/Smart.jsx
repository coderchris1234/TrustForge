import React from "react";
import { SmartContainer } from "./SmartStyle";
import { SmartData } from "../Config/Data";

const Smart = () => {
  return (
    <SmartContainer>
      <div className="Smart_wrapper">
        <div className="Smart_left">
          <aside className="Smart_left_content">
            <h3>
              Why <span>TrustForge?</span>
            </h3>
            <p>
              We provide everything you need to build successful <br />
              partnerships between startups and investors.
            </p>
          </aside>
        </div>
        <article className="Smart_right">
          <div className="Smart_right_content">
            {SmartData[0]?.map((item) => (
              <div className="Smart_card">
                <article className="Smart_card_cont">
                  <div className="Smart_img">{item.image}</div>
                  <h3>{item.title}</h3>
                  <span>{item.descriptions}</span>
                </article>
              </div>
            ))}
          </div>

          <div className="Smart_right_content">
            {SmartData[1]?.map((item) => (
              <div className="Smart_card">
                <article className="Smart_card_cont">
                  <div className="Smart_img">{item.image}</div>
                  <h3>{item.title}</h3>
                  <span>{item.descriptions}</span>
                </article>
              </div>
            ))}
          </div>
        </article>
      </div>
    </SmartContainer>
  );
};

export default Smart;
