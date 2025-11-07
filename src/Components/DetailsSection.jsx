import React from "react";
import {
  StatLabel,
  StatValue,
  SectionTitle,
  SectionText,
} from "./DetailsSectionStyle";

const DetailsSection = () => {
  return (
    <Wrapper>
      <TopRow>
        <StatBox>
          <StatIcon>₦</StatIcon>
          <div>
            <StatLabel>Funding Sought</StatLabel>
            <StatValue>₦500,000</StatValue>
          </div>
        </StatBox>

        <StatBox>
          <StatIcon>📈</StatIcon>
          <div>
            <StatLabel>Current Revenue</StatLabel>
            <StatValue>₦750,000</StatValue>
          </div>
        </StatBox>

        <StatBox>
          <StatIcon>📅</StatIcon>
          <div>
            <StatLabel>Founded</StatLabel>
            <StatValue>2022</StatValue>
          </div>
        </StatBox>
      </TopRow>

      <SectionTitle>Business Model</SectionTitle>
      <SectionText>
        We operate as a B2B SaaS company, offering subscription-based access to
        our AI-powered supply chain optimization platform. Our clients are
        primarily mid to large-size manufacturing companies looking to reduce
        costs and improve efficiency.
      </SectionText>

      <SectionTitle>Revenue Model</SectionTitle>
      <SectionText>
        We generate revenue through monthly and annual subscription plans, with
        pricing based on company size and feature needed. Additional revenue
        comes from implementation services and premium support packages.
      </SectionText>

      <SectionTitle>Target Market</SectionTitle>
      <SectionText>
        Mid to large-size manufacturing and retail companies with complex supply
        chains. The global supply chain management market is valued at ₦15.85
        billion and growing at 11.2% CAGR. Our target customers have annual
        revenues of ₦50M+.
      </SectionText>
    </Wrapper>
  );
};

export default DetailsSection;
