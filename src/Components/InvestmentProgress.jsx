import React from "react";
import {
  ProgressCard,
  Title,
  Metrics,
  MetricItem,
  ProgressBarContainer,
  ProgressBar,
  ProgressFill,
  ProgressLabels,
  LabelLeft,
  LabelRight,
} from "./InvestmentProgressStyle";

const InvestmentProgress = ({ data }) => {
  const goal = data?.fundingSought;
  const raised = 0;
  const remaining = goal - raised;
  const percentage = Math.round((raised / goal) * 100);

  return (
    <ProgressCard>
      <Title>Investment Progress</Title>

      <Metrics>
        <MetricItem>
          <strong>Funding Goal:</strong> ₦{goal?.toLocaleString()}
        </MetricItem>
        <MetricItem>
          <strong>Raised:</strong> ₦{raised.toLocaleString()}
        </MetricItem>
        <MetricItem>
          <strong>Remaining:</strong> ₦{remaining.toLocaleString()}
        </MetricItem>
        <MetricItem>
          <strong>Investors:</strong> 0
        </MetricItem>
      </Metrics>

      <ProgressBarContainer>
        <ProgressBar>
          <ProgressFill style={{ width: `${percentage}%` }} />
        </ProgressBar>
        <ProgressLabels>
          <LabelLeft>{percentage}% Funded</LabelLeft>
          <LabelRight>₦{remaining.toLocaleString()} to go</LabelRight>
        </ProgressLabels>
      </ProgressBarContainer>
    </ProgressCard>
  );
};

export default InvestmentProgress;
