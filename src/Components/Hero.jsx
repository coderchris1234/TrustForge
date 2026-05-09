import React, { useEffect, useState } from "react";
import { HeroContainer } from "../Components/HeroStyle";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const words = ["Startups", "Businesses", "Investors"];

const Hero = () => {
  const nav = useNavigate();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <HeroContainer>
      <div className="Hero_inner">
        {/* ── Left ── */}
        <div className="Hero_left">
          <div className="Hero_badge">
            <span className="badge_dot">✓</span>
            <span>Trusted by 90+ businesses across Africa</span>
          </div>

          <h1>
            Where{" "}
            <span className="word-ticker">
              <span key={idx} className="animated-word">
                {words[idx]}
              </span>
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
        </div>

        {/* ── Right bento ── */}
        <div className="Hero_right">
          <div className="Hero_card_main">
            <span className="card_label">Total Funding Facilitated</span>
            <span className="card_stat">₦100M+</span>
            <p className="card_desc">
              Connecting vision-driven founders with the right capital to scale
              their businesses across Africa.
            </p>
          </div>

          <div className="Hero_card_row">
            <div className="Hero_card_sm">
              <span className="sm_num">90+</span>
              <span className="sm_label">Active businesses</span>
            </div>
            <div className="Hero_card_sm">
              <span className="sm_num">30+</span>
              <span className="sm_label">Verified investors</span>
            </div>
            <div className="Hero_card_sm">
              <span className="sm_num">95%</span>
              <span className="sm_label">Satisfaction rate</span>
            </div>
            <div className="Hero_card_sm">
              <span className="sm_num">3mo</span>
              <span className="sm_label">Avg. time to funding</span>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
