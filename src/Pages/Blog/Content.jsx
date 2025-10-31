import React from "react";
import { ContentContainer } from "./ContentStyle";
import { InsightData } from "../../Config/Data";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogPostCard from "../../Components/BlogPostCard";
import CustomButton from "../../Components/CustomButton";

const Content = () => {
  const blogTitle = useSelector((state) => state.TrustForge.blogBtnAction);
  return (
    <ContentContainer>
      <div className="Startup_content">
        {InsightData?.map((item) =>
          item.title.includes(blogTitle) ? <BlogPostCard item={item} /> : null
        )}
      </div>
    </ContentContainer>
  );
};

export default Content;
