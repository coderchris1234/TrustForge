import React from "react";
import { CategoryContainer } from "./CategoryBlogStyle";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import BussInvest from "./BussInvest";

const CategoryBlog = () => {
  return (
    <CategoryContainer>
      <Header />
      <BussInvest />
      <Footer />
    </CategoryContainer>
  );
};

export default CategoryBlog;
