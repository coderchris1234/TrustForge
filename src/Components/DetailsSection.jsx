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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailsSection = ({ data }) => {
  const isLoading = !data;

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
            <StatValue>
              {isLoading ? (
                <Skeleton width={100} />
              ) : (
                `₦${formatNumber(data.fundingSought)}`
              )}
            </StatValue>
          </div>
        </StatBox>

        <StatBox>
          <StatIcon>📈</StatIcon>
          <div>
            <StatLabel>Current Revenue</StatLabel>
            <StatValue>
              {isLoading ? (
                <Skeleton width={100} />
              ) : (
                formatNumber(data.currentRevenue)
              )}
            </StatValue>
          </div>
        </StatBox>

        <StatBox>
          <StatIcon>📅</StatIcon>
          <div>
            <StatLabel>Founded</StatLabel>
            <StatValue>
              {isLoading ? <Skeleton width={60} /> : data.yearFounded}
            </StatValue>
          </div>
        </StatBox>
      </TopRow>

      <SectionTitle>Business Model</SectionTitle>
      <SectionText>
        {isLoading ? <Skeleton count={2} /> : data.businessModel}
      </SectionText>

      <SectionTitle>Revenue Model</SectionTitle>
      <SectionText>
        {isLoading ? <Skeleton count={2} /> : data.revenueModel}
      </SectionText>

      <SectionTitle>Target Market</SectionTitle>
      <SectionText>
        {isLoading ? <Skeleton count={2} /> : data.targetMarket}
      </SectionText>
    </Wrapper>
  );
};

export default DetailsSection;
