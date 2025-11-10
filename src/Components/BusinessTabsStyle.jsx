import styled from "styled-components";

export const TabContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const TabHeader = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  background: ${({ active }) => (active ? "#2a4eff" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const TabContent = styled.div`
  font-size: 14px;
  color: #444;
`;
