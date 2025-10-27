import React from "react";
import { StartupBlogContainer } from "./StartupBlogStyle";
import CustomButton from "../../Components/CustomButton";
import Content from "./Content";

const StartupBlog = () => {
  return (
    <StartupBlogContainer>
      <div className="Startup_wrapper">
        <Content />
      </div>
    </StartupBlogContainer>
  );
};

export default StartupBlog;
