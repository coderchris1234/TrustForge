import React from "react";
import {
  Wrapper,
  TopRow,
  StatBox,
  StatIcon,
  StatLabel,
  StatValue,
  SectionTitle,
  SectionText,
} from "./DetailsSectionStyle";

const DetailsSection = ({ data }) => {
  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-NG").format(num);
  };
  return (
    <Wrapper>
      <TopRow>
        <StatBox>
          <StatIcon>₦</StatIcon>
          <div>
            <StatLabel>Funding Sought</StatLabel>
            <StatValue>₦{formatNumber(data?.fundingSought)}</StatValue>
          </div>
        </StatBox>

        <StatBox>
          <StatIcon>📈</StatIcon>
          <div>
            <StatLabel>Current Revenue</StatLabel>
            <StatValue>{formatNumber(data?.currentRevenue)}</StatValue>
          </div>
        </StatBox>

        <StatBox>
          <StatIcon>📅</StatIcon>
          <div>
            <StatLabel>Founded</StatLabel>
            <StatValue>{data?.yearFounded}</StatValue>
          </div>
        </StatBox>
      </TopRow>

      <SectionTitle>Business Model</SectionTitle>
      <SectionText>{data?.businessModel}</SectionText>

      <SectionTitle>Revenue Model</SectionTitle>
      <SectionText>{data?.revenueModel}</SectionText>

      <SectionTitle>Target Market</SectionTitle>
      <SectionText>{data?.targetMarket}</SectionText>
    </Wrapper>
  );
};

export default DetailsSection;
