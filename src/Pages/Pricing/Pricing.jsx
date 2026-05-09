import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../Components/Header";
import MyPricing from "../../Components/MyPricingClean";
import Footer from "../../Components/Footer";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PricingHero = styled.div`
  width: 100%;
  background: #04091a;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 1.5rem 5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(0,70,255,0.18) 0%, transparent 65%);
    pointer-events: none;
  }

  .hero_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    position: relative;
    z-index: 1;
    animation: ${fadeInUp} 0.9s ease forwards;

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(0,70,255,0.15);
      border: 1px solid rgba(77,139,255,0.35);
      border-radius: 100px;
      padding: 6px 18px;
      font-size: 0.72rem;
      font-weight: 700;
      color: #93b4ff;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    h1 {
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 800;
      color: #ffffff;
      margin: 0;
      letter-spacing: -1px;
      line-height: 1.1;
    }

    p {
      font-size: clamp(0.95rem, 2vw, 1.1rem);
      color: rgba(255,255,255,0.55);
      line-height: 1.75;
      max-width: 520px;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 4rem;
  }
`;

const PricingBody = styled.div`
  width: 100%;
  background: #f8faff;
  display: flex;
  justify-content: center;
  padding: 4rem 1.5rem 6rem;
`;

const Pricing = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <PricingHero>
        <div className="hero_content">
          <span className="badge">Simple & Transparent</span>
          <h1>Choose Your Plan</h1>
          <p>
            Start free and scale as you grow. No hidden fees, no surprises —
            just the tools you need to connect and succeed.
          </p>
        </div>
      </PricingHero>
      <PricingBody>
        <MyPricing />
      </PricingBody>
      <Footer />
    </div>
  );
};

export default Pricing;
