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

const InvestmentProgress = ({ data, remain, investor }) => {
  const goal = data?.fundingSought;
  const raised = data?.fundRaised;
  const remaining = remain;
  const percentage = Math.round((raised / goal) * 100);

    const formatNumber = (num) => {
    return new Intl.NumberFormat("en-NG").format(num);
  };

  return (
    <ProgressCard>
      <Title>Investment Progress</Title>

      <Metrics>
        <MetricItem>
          <strong>Funding Goal:</strong> ₦{formatNumber(data?.fundingSought)}
        </MetricItem>
        <MetricItem>
          <strong>Raised:</strong> ₦{formatNumber(raised)}
        </MetricItem>
        <MetricItem>
          <strong>Remaining:</strong>₦{formatNumber(remaining || 0)}
        </MetricItem>
        <MetricItem>
          <strong>Investors:</strong> {investor?.length}
        </MetricItem>
      </Metrics>

      <ProgressBarContainer>
        <ProgressBar>
          <ProgressFill style={{ width: `${percentage}%` }} />
        </ProgressBar>
        <ProgressLabels>
          <LabelLeft>{percentage}% Funded</LabelLeft>
          <LabelRight>₦{formatNumber(remaining || 0)} to go</LabelRight>
        </ProgressLabels>
      </ProgressBarContainer>
    </ProgressCard>
  );
};

export default InvestmentProgress;
