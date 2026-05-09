import React from "react";
import { BlogHeroContainer } from "./BlogHeroStyle";

const BlogHero = () => {
  return (
    <BlogHeroContainer>
      <div className="Blog_hero_wrapper">
        <span className="Blog_badge">Knowledge Hub</span>
        <h1>Insights & Resources</h1>
        <p>
          Expert advice, tips, and strategies for founders and investors
          navigating the fundraising journey
        </p>
      </div>
    </BlogHeroContainer>
  );
};

export default BlogHero;
