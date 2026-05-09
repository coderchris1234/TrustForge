import React, { useEffect, useState } from "react";
import { HeroContainer } from "../Components/HeroStyle";
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
          <div className="Hero_badge">
            <span className="badge_dot" />
            Trusted by 90+ businesses across Africa
          </div>

          <h1>
            Where{" "}
            <span key={currentWordIndex} className="animated-word">
              {words[currentWordIndex]}
            </span>
            <br />
            Build the Future Together.
          </h1>

          <p className="Hero_sub">
            TrustForge connects innovative founders, growing enterprises, and
            smart investors on a secure platform built for collaboration,
            funding, and sustainable growth.
          </p>

          <div className="Hero_cta_group">
            <button className="Hero_btn" onClick={() => nav("/signup")}>
              Get started for free <GoArrowRight className="Hero_icon" />
            </button>
            <button className="Hero_btn_outline" onClick={() => nav("/about")}>
              Learn more
            </button>
          </div>

          <div className="Hero_stats">
            <div className="stat_item">
              <strong>90+</strong>
              <span>Active businesses</span>
            </div>
            <div className="stat_item">
              <strong>30+</strong>
              <span>Verified investors</span>
            </div>
            <div className="stat_item">
              <strong>₦100M+</strong>
              <span>Funding facilitated</span>
            </div>
            <div className="stat_item">
              <strong>95%</strong>
              <span>Satisfaction rate</span>
            </div>
          </div>
        </article>
      </div>
    </HeroContainer>
  );
};

export default Hero;
