import React from "react";
import { InsightContainer } from "./InsightStyle";
import { InsightData } from "../Config/Data";
import { useNavigate } from "react-router-dom";
import BlogPostCard from "./BlogPostCard";

const Insight = () => {
  const nav = useNavigate();
  return (
    <InsightContainer>
      <div className="Insight_wrapper">
        <div className="Insight_texts">
          <div className="left_head">
            <span className="section_label">Insights & Resources</span>
            <h3>
              Expert <span>Advice.</span>
            </h3>
          </div>
          <div className="right_head">
            <p>Expert advice and tips for both startups and investors</p>
          </div>
        </div>

        <div className="Insight_card_holder">
          {InsightData?.slice(0, 3).map((item) => (
            <BlogPostCard item={item} key={item.heading} />
          ))}
        </div>

        <button className="Insight_btn" onClick={() => nav("/insights")}>
          View all posts →
        </button>
      </div>
    </InsightContainer>
  );
};

export default Insight;
