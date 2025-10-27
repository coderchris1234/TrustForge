import React from "react";
import { ProblemContainer } from "./ProblemStyle";

const Problem = () => {
  return (
    <ProblemContainer>
      <div className="Problem_wrapper">
        <aside className="Problem_section">
          <div className="Problem_text_holder">
            <h3>The Problem We’re solving</h3>
            <p>
              Many startups and small business owners struggle to secure the
              right <br /> investors due to limited visibility, lack of trust,
              and inefficient
              <br /> networking channels
            </p>
            <span>
              on the other hand, investors face difficulties identifying
              credible, investment ready businesses that align with their
              interest and risk profiles. This hinders innovation, slow business
              growth, and waste valuable opportunities on both sides.
            </span>
          </div>
        </aside>
        <aside className="Problem_section1"></aside>
      </div>
    </ProblemContainer>
  );
};

export default Problem;
