import React from "react";
import styled from "styled-components";

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MetricRow = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 500;
`;

const Section = styled.div`
  background: #f9f9f9;
  padding: 12px;
  border-radius: 8px;
`;

const DetailsTab = ({ data }) => (
  <DetailsWrapper>
    <MetricRow>
      <div>
        Funding Sought: ₦
        {data?.fundingSought ? Number(data.fundingSought).toLocaleString() : 0}
      </div>
      <div>
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
