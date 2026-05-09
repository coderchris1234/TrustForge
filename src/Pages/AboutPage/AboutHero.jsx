import React from "react";
import { AboutHeroContainer } from "./AboutHeroStyle";

const AboutHero = () => {
  return (
    <AboutHeroContainer>
      <div className="About_hero_content">
        <span className="About_badge">Our Story</span>
        <h1>
          Building Bridges Between Innovation and Investment
        </h1>
        <p>
          TRUSTFORGE was founded on a simple belief: great businesses and great
          investors should find each other easily, securely, and with complete
          transparency.
        </p>
      </div>
    </AboutHeroContainer>
  );
};

export default AboutHero;
