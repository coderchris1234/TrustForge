import React from "react";
import { SolutionContainer } from "./SolutionStyle";
import Woman from "/Woman.jpg";

const Solution = () => {
  return (
    <SolutionContainer>
      <div className="Solution_wrapper">
        <aside className="Solution_section">
          <img src={Woman} alt="Our solution" />
        </aside>
        <aside className="Section_section1">
          <div className="Solution_text_holder">
            <span className="section_label">Our Approach</span>
            <h3>Our Solution</h3>
            <p>
              TRUSTFORGE addresses this gap by providing a secure digital
              platform that bridges the gap between startups, existing
              businesses, and potential investors.
            </p>
            <span>
              We enable verified entrepreneurs to showcase their ventures and
              allow investors to discover, evaluate, and fund credible
              opportunities with transparency and confidence. Our comprehensive
              verification system, intelligent matching algorithm, and robust
              due diligence tools make the entire process efficient and
              trustworthy.
            </span>
          </div>
        </aside>
      </div>
    </SolutionContainer>
  );
};

export default Solution;
