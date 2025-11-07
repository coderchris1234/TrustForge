// CardStyles.js
import styled from "styled-components";

export const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(21, 32, 43, 0.06);
  padding: 24px;
  gap: 24px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;
`;

export const TopTags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  line-height: 1;
  background: ${(props) => (props.active ? "#e6f9ed" : "#f2f4f7")};
  color: ${(props) => (props.active ? "#0a7f3a" : "#394049")};
  border: ${(props) =>
    props.active ? "1px solid rgba(10,127,58,0.12)" : "none"};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem; /* ~24px */
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.94rem;
  color: #6b7280;
  max-width: 560px;
  margin-bottom: 18px;
`;

export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(180deg, #f3f4f6, #e5e7eb);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #374151;
`;

export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: 0.96rem;
  font-weight: 600;
  color: #111827;
`;

export const Role = styled.div`
  font-size: 0.82rem;
  color: #6b7280;
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 6px;
  display: flex;
  align-items: center;
`;

export const Stat = styled.span`
  font-size: 0.82rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ActionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 190px;
  align-items: stretch;
`;

const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
`;

export const LikeButton = styled(ButtonBase)`
  background: transparent;
  color: #374151;
  border: 1px solid #e6e9ee;
`;

export const SaveButton = styled(ButtonBase)`
  background: transparent;
  color: #374151;
  border: 1px solid #e6e9ee;
`;

export const ScheduleButton = styled(ButtonBase)`
  background: white;
  color: #0b5cff;
  border: 1px solid rgba(11, 92, 255, 0.14);
`;

export const InvestButton = styled(ButtonBase)`
  background: #2ea043;
  color: white;
  border-radius: 8px;
  padding: 12px 14px;
  box-shadow: 0 6px 12px rgba(46, 160, 67, 0.12);
`;
