import styled from "styled-components";

export const ProgressCard = styled.div`
  background-color: var(--primary_color_300);
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #222;
`;

export const Metrics = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 1rem;
  margin-bottom: 20px;
  width: 100%;
`;

export const MetricItem = styled.div`
  font-size: 18px;
  color: #444;

  strong {
    color: #222;
    font-weight: 600;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProgressBar = styled.div`
  height: 12px;
  background-color: #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: #2a4eff;
  transition: width 0.3s ease;
`;

export const ProgressLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #555;
`;

export const LabelLeft = styled.span``;
export const LabelRight = styled.span``;
