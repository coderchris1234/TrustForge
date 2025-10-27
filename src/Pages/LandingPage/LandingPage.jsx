import React from "react";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import Fund from "../../Components/Fund";
import { LandingPageContainer } from "./LandingPageStyle";
import Target from "../../Components/Target";
import Insight from "../../Components/Insight";
import Smart from "../../Components/Smart";
import Stories from "../../Components/Stories";
import Footer from "../../Components/Footer";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <div className="LandingPage_wrapper">
        <Header />
        <Hero />
        <Fund />
        <Target />
        <Insight />
        <Smart />
        <Stories />
        <Footer />
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
