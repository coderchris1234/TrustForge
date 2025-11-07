import styled from "styled-components";

export const ProgressCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 24px 20px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03);
  display: block;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

export const Header = styled.h3`
  margin: 0 0 18px 0;
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px 24px;
  align-items: center;
  margin-bottom: 18px;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 6px;
`;

export const Amount = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
`;

export const BarWrap = styled.div`
  margin-top: 6px;
  margin-bottom: 10px;
  position: relative;
  width: 100%;
`;

export const BarTrack = styled.div`
  height: 10px;
  background: rgba(17, 24, 39, 0.08);
  border-radius: 8px;
  overflow: hidden;
`;

export const BarFill = styled.div`
  height: 100%;
  background: #2b6cf6;
  border-radius: 8px 0 0 8px;
  transition: width 0.4s ease;
`;

export const ProgressNote = styled.div`
  font-size: 14px;
  color: #374151;
  margin-top: 8px;
`;

export const RightNote = styled.div`
  position: absolute;
  right: 16px;
  bottom: 12px;
  font-size: 13px;
  color: #111827;
`;
