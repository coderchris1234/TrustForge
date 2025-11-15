import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 28px;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  /* Tablet */
  @media (max-width: 900px) {
    padding: 22px;
    gap: 22px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    padding: 18px;
    border-radius: 16px;
    gap: 20px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;

  /* Tablet – turn into grid */
  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 20px;
  }

  /* Mobile – full single column */
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

export const StatBox = styled.div`
  background: #f5f7fa;
  padding: 18px 22px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  width: 230px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);

  /* Tablet – widen to fill space */
  @media (max-width: 900px) {
    width: calc(50% - 10px);
  }

  /* Mobile – full width */
  @media (max-width: 600px) {
    width: 100%;
    padding: 16px 18px;
    gap: 12px;
  }
`;

export const StatIcon = styled.div`
  background: ${(props) => props.bg || "#d9eaff"};
  padding: 12px;
  border-radius: 10px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 20px;
  }
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: #505050;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const StatValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #000;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
    margin-top: 6px;
  }
`;

export const SectionText = styled.p`
  font-size: 15px;
  color: #333;
  line-height: 1.55;
  max-width: 92%;

  @media (max-width: 900px) {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
