import React from "react";
import { BlogContainer } from "./BlogPageStyle";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import BlogHero from "./BlogHero";
import StartupBlog from "./StartupBlog";
import StartBtn from "./StartBtn";

const BlogPage = () => {
  return (
    <BlogContainer>
      <Header />
      <BlogHero />
      <StartBtn />
      <StartupBlog />
      <Footer />
    </BlogContainer>
  );
};

export default BlogPage;
