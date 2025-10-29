import React from "react";
import { InsightContainer } from "./InsightStyle";
import CustomButton from "./CustomButton";
import { InsightData } from "../Config/Data";
import { useNavigate } from "react-router-dom";
import BlogPostCard from "./BlogPostCard";

const Insight = () => {
  const nav = useNavigate();
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
            <BlogPostCard item={item} />
          ))}
        </div>

        <CustomButton
          className="Insight_btn"
          Btntext="View All Post"
          type="button"
          onClick={() => {
            nav("/blog");
          }}
        />
      </div>
    </InsightContainer>
  );
};

export default Insight;
