import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  mobileLarge: "768px",
  tablet: "1024px",
};

export const TabContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    padding: 14px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
  }
`;

export const TabHeader = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: nowrap;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 16px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    gap: 12px;
    flex-wrap: wrap; /* allow wrapping for narrow screens */
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
    flex-wrap: wrap;
  }
`;

export const TabButton = styled.button`
  background: ${({ active }) => (active ? "#2a4eff" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 7px 14px;
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    padding: 6px 12px;
    font-size: 13px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

export const TabContent = styled.div`
  font-size: 14px;
  color: #444;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 13px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 12.5px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;
