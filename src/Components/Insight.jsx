import React from "react";
import { InsightContainer } from "./InsightStyle";
import CustomButton from "./CustomButton";
import { InsightData } from "../Config/Data";
import { NavLink } from "react-router-dom";

const Insight = () => {
  return (
    <InsightContainer>
      <div className="Insight_wrapper">
        <div className="Insight_texts">
          <h3>
            Insights & <span>Resources.</span>
          </h3>
          <p>Expert advice and tips for both startups and investors</p>
        </div>

        <div className="Insight_card_holder">
          {InsightData?.slice(0, 3).map((item) => (
            <article className="Insight_card">
              <div className="Insight_Card_image">
                <img src={item.image} alt="" />
              </div>
              <div className="Insight_card_contents">
                <article className="Insight_card_text_holder">
                  <span>{item.title}</span>
                  <h3>{item.details}</h3>
                  <div className="Read_me_blog">
                    <p>
                      {item.descriptions}{" "}
                      <NavLink to="/blog" className="Read_More">
                        Read More
                      </NavLink>
                    </p>
                  </div>
                </article>
                <aside className="Insight_card_footer">
                  <div className="Profile_insight">
                    <span>{item?.profileIcon} </span>
                    <p>{item.profileName}</p>
                  </div>
                  <div className="Profile_insight1">
                    <div className="Profile_icon_holder">
                      <span>{item?.dateIcon}</span>
                      <p>{item.dateName}</p>
                    </div>
                    <div className="Profile_icon_holder">
                      <span>{item?.timeIcon}</span>
                      <p>{item.timeName}</p>
                    </div>
                  </div>
                </aside>
              </div>
            </article>
          ))}
        </div>

        <CustomButton
          className="Insight_btn"
          Btntext="View All Post"
          type="button"
        />
      </div>
    </InsightContainer>
  );
};

export default Insight;
