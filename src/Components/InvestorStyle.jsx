import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  mobileLarge: "768px",
  tablet: "1024px",
};

export const InvestorStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  /* Tablet: Reduce spacing slightly */
  @media (max-width: ${breakpoints.tablet}) {
    gap: 8px;
  }

  /* Mobile Large: Switch to vertical layout */
  @media (max-width: ${breakpoints.mobileLarge}) {
    flex-direction: column;
    gap: 10px;
  }

  /* Mobile: Tighter spacing */
  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
  }
`;
