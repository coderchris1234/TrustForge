import React from "react";
import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  mobileLarge: "768px",
  tablet: "1024px",
};

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 14px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    gap: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
  }
`;

export const MetricRow = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 500;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 16px;
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    flex-direction: column; /* stack items on smaller screens */
    gap: 12px;
    font-size: 13px;
    align-items: flex-start;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
    font-size: 12px;
  }
`;

export const Section = styled.div`
  background: #f9f9f9;
  padding: 12px;
  border-radius: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    padding: 9px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
  }
`;

const DetailsTab = ({ data }) => (
  <DetailsWrapper>
    <MetricRow>
      <div>
        Funding Sought: ₦
        {data?.fundingSought ? Number(data.fundingSought).toLocaleString() : 0}
      </div>
      <div title="Amount generated yearly">
        Current Revenue: ₦
        {data?.currentRevenue
          ? Number(data.currentRevenue).toLocaleString()
          : 0}
      </div>
      <div>Year Founded: {data?.yearFounded}</div>
    </MetricRow>

    <Section>
      <h4>Business Model</h4>
      <p>{data?.businessModel}</p>
    </Section>

    <Section>
      <h4>Revenue Model</h4>
      <p>{data?.revenueModel}</p>
    </Section>

    <Section>
      <h4>Target Market</h4>
      <p>{data?.targetMarket}</p>
    </Section>
  </DetailsWrapper>
);

export default DetailsTab;
