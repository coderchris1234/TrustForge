import React from "react";
import { TargetContainer } from "./TargetStyle";
import { TargetInfo } from "../Config/Data";

const Target = () => {
  return (
    <TargetContainer>
      <div className="Target_wrapper">
        <section className="who_we_are">
          <div className="left_col">
            <span className="section_label">About TrustForge</span>
            <h3>Who We Are.</h3>
          </div>
          <div className="right_col">
            <p>
              TrustForge is a secure digital ecosystem designed to connect
              startups, established business owners, and investors in one
              trusted space.
            </p>
            <p>
              We make it easier for vision-driven founders to access the funding
              and partnerships they need to grow, while helping investors
              discover verified, high-potential ventures worth supporting.
            </p>
          </div>
        </section>

        <section className="Secure">
          {TargetInfo?.map((item) => (
            <div className="Secure_img" key={item.title}>
              <div className="Secure_image_holder">{item.image}</div>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </div>
          ))}
        </section>
      </div>
    </TargetContainer>
  );
};

export default Target;
