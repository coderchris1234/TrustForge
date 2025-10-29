import React from "react";
import { SolutionContainer } from "./SolutionStyle";
import Woman from "../../assets/Woman.jpg";

const Solution = () => {
  return (
    <SolutionContainer>
      <div className="Solution_wrapper">
        <aside className="Solution_section">
          <img src={Woman} />
        </aside>
        <aside className="Section_section1">
          <div className="Solution_text_holder">
            <h3>Our Solution</h3>
            <p>
              TRUSTFORGE addresses this gap by providing a secure digital
              platform <br />
              that bridges the gap between startups, existing businesses, and
              <br />
              potential investors.
            </p>
            <span>
              We enable verified entrepreneurs to showcase their ventures, and
              allow investors to discover, evaluate, fund credible opportunities
              with transparency and confidence. Our comprehensive verification
              system, intelligent matching algorithm, and robust due dIligence
              tools makes the entire process efficient and trustworthy
            </span>
          </div>
        </aside>
      </div>
    </SolutionContainer>
  );
};

export default Solution;
