import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 28px;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
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
`;

export const StatIcon = styled.div`
  background: ${(props) => props.bg || "#d9eaff"};
  padding: 12px;
  border-radius: 10px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: #505050;
  font-weight: 500;
`;

export const StatValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin-top: 10px;
`;

export const SectionText = styled.p`
  font-size: 15px;
  color: #333;
  line-height: 1.55;
  max-width: 92%;
`;
