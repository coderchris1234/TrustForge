import React from "react";
import { HeroContainer } from "../Components/HeroStyle";
import CustomButton from "./CustomButton";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="Hero_page_wrapper">
        <article className="Hero_content">
          <h3>
            Where Startups, Businesses, <br /> and Investors Build the Future
            Together.
          </h3>
          <p>
            TrustForge connects innovative founders, growing enterprises,
            <br /> and smart investors on a secure platform built for
            collaboration,
            <br /> funding, and sustainable growth.
          </p>
          <CustomButton
            className="Hero_btn"
            Btntext="Get started"
            type="button"
            icon=<GoArrowRight className="Hero_icon" />
          />
        </article>
      </div>
    </HeroContainer>
  );
};

export default Hero;
