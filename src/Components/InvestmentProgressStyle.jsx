import styled from "styled-components";

/* breakpoints */
const breakpoints = {
  mobile: "480px",       // small phones
  mobileLarge: "768px",  // large phones / small tablets
  tablet: "1024px",      // tablets / small laptops
};

export const ProgressCard = styled.div`
  background-color: var(--primary_color_300);
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    padding: 1.25rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.9rem;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #222;

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 16px;
    margin-bottom: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const Metrics = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 1rem;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;

  /* On tablets and below, allow items to wrap to new lines so they don't get squished */
  @media (max-width: ${breakpoints.tablet}) {
    gap: 10px;
    padding: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    flex-wrap: wrap;
    gap: 8px;
    padding: 0.6rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
    padding: 0.5rem;
    margin-bottom: 14px;
  }
`;

export const MetricItem = styled.div`
  font-size: 18px;
  color: #444;
  min-width: 0; /* allows children to shrink in flex */

  strong {
    color: #222;
    font-weight: 600;
  }

  /* make metric text slightly smaller on smaller screens */
  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${breakpoints.mobileLarge}) {
    gap: 6px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 6px;
  }
`;

export const ProgressBar = styled.div`
  height: 12px;
  background-color: #e0e0e0;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobileLarge}) {
    height: 11px;
    border-radius: 6px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 10px; /* slightly slimmer on very small screens */
    border-radius: 5px;
  }
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: #2a4eff;
  transition: width 0.3s ease;
  width: ${(props) => props.width || "0%"}; /* allow width via props */
`;

/* labels under the progress bar */
export const ProgressLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #555;

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 12.5px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const LabelLeft = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 48%;
  display: inline-block;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 60%;
  }
`;

export const LabelRight = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 48%;
  text-align: right;
  display: inline-block;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 40%;
    text-align: right;
  }
`;
