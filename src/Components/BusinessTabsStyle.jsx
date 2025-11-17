import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  mobileLarge: "768px",
  tablet: "1024px",
};

/* MAIN CONTAINER */
export const TabContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  /* Tablet */
  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }

  /* Mobile Large */
  @media (max-width: ${breakpoints.mobileLarge}) {
    padding: 16px;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 14px;
    border-radius: 10px;
  }
`;

/* TAB HEADER (Button Row) */
export const TabHeader = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: nowrap;

  /* Tablet */
  @media (max-width: ${breakpoints.tablet}) {
    gap: 16px;
  }

  /* Mobile Large */
  @media (max-width: ${breakpoints.mobileLarge}) {
    flex-wrap: wrap;
    gap: 12px;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;   /* centers for small phones */
  }
`;

/* TAB BUTTONS */
export const TabButton = styled.button`
  background: ${({ active }) => (active ? "#2a4eff" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  padding: 10px 18px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  /* Tablet */
  @media (max-width: ${breakpoints.tablet}) {
    padding: 9px 16px;
    font-size: 14px;
  }

  /* Mobile Large */
  @media (max-width: ${breakpoints.mobileLarge}) {
    padding: 8px 14px;
    font-size: 13.5px;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 7px 12px;
    font-size: 12.5px;
    width: 100%;        /* Buttons become full width */
    text-align: center;
  }
`;

/* TAB CONTENT AREA */
export const TabContent = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #444;
  margin-top: 6px;

  /* Tablet */
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 13.5px;
  }

  /* Mobile Large */
  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 13px;
  }

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12.5px;
  }
`;
