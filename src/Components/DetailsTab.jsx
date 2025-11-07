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

const DetailsTab = () => (
  <DetailsWrapper>
    <MetricRow>
      <div>Funding Sought: $900k</div>
      <div>Current Revenue: $120k</div>
      <div>Year Founded: 2025</div>
    </MetricRow>

    <Section>
      <h4>Business Model</h4>
      <p>
        We operate as a B2B SaaS company, offering subscription based access to
        our AI-powered supply chain optimization platform...
      </p>
    </Section>

    <Section>
      <h4>Revenue Model</h4>
      <p>
        We operate as a B2B SaaS company, offering subscription based access to
        our AI-powered supply chain optimization platform...
      </p>
    </Section>

    <Section>
      <h4>Target Market</h4>
      <p>
        We operate as a B2B SaaS company, offering subscription based access to
        our AI-powered supply chain optimization platform...
      </p>
    </Section>
  </DetailsWrapper>
);

export default DetailsTab;
