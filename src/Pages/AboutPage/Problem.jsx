import React from "react";
import { ProblemContainer } from "./ProblemStyle";
import Frame from "/Frame.png";

const Problem = () => {
  return (
    <ProblemContainer>
      <div className="Problem_wrapper">
        <aside className="Problem_section">
          <div className="Problem_text_holder">
            <span className="section_label">The Challenge</span>
            <h3>The Problem We're Solving</h3>
            <p>
              Many startups and small business owners struggle to secure the
              right investors due to limited visibility, lack of trust, and
              inefficient networking channels.
            </p>
            <span>
              On the other hand, investors face difficulties identifying
              credible, investment-ready businesses that align with their
              interests and risk profiles. This hinders innovation, slows
              business growth, and wastes valuable opportunities on both sides.
            </span>
          </div>
        </aside>
        <aside className="Problem_section1">
          <img src={Frame} alt="The problem illustration" />
        </aside>
      </div>
    </ProblemContainer>
  );
};

export default Problem;
