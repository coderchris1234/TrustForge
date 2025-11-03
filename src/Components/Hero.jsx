import React, { useEffect, useState } from "react";
import { HeroContainer } from "../Components/HeroStyle";
import CustomButton from "./CustomButton";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const words = ["Startups", "Businesses", "Investors"];

const Hero = () => {
  const nav = useNavigate();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <div className="Hero_page_wrapper">
        <article className="Hero_content">
          <h3>
            Where{" "}
            <span key={words[currentWordIndex]} className="animated-word">
              {words[currentWordIndex]}
            </span>{" "}
            <br /> Build the Future Together.
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
            icon={<GoArrowRight className="Hero_icon" />}
            onClick={() => nav("/signup")}
          />
        </article>
      </div>
    </HeroContainer>
  );
};

export default Hero;
