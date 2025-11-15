import styled from "styled-components";

/* ------------------ BREAKPOINTS ------------------ */
const breakpoints = {
  mobile: "480px",
  tablet: "900px",
};

/* ------------------ CARD WRAPPER ------------------ */
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

  /* Tablet: Switch to column layout */
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  /* Mobile: full width edge-to-edge */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
    gap: 16px;
  }
`;

/* ------------------ TAGS ------------------ */
export const TopTags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 6px;
    flex-wrap: wrap;
  }
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

  @media (max-width: ${breakpoints.mobile}) {
    padding: 5px 8px;
    font-size: 0.7rem;
  }
`;

/* ------------------ TITLE / SUBTITLE ------------------ */
export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.35rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.94rem;
  color: #6b7280;
  max-width: 560px;
  margin-bottom: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;

/* ------------------ PROFILE ROW ------------------ */
export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
  }
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

  @media (max-width: ${breakpoints.mobile}) {
    width: 36px;
    height: 36px;
    font-size: 0.85rem;
  }
`;

export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: 0.96rem;
  font-weight: 600;
  color: #111827;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

export const Role = styled.div`
  font-size: 0.82rem;
  color: #6b7280;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.78rem;
  }
`;

/* ------------------ STATS ------------------ */
export const StatsRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 6px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 12px;
    flex-wrap: wrap;
  }
`;

export const Stat = styled.span`
  font-size: 0.82rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.78rem;
  }
`;

/* ------------------ ACTION COLUMN (RIGHT SIDE) ------------------ */
export const ActionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 190px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    min-width: unset;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
  }
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
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 9px 12px;
    font-size: 0.9rem;
  }
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

  @media (max-width: ${breakpoints.mobile}) {
    padding: 11px 14px;
  }
`;

/* ------------------ MODAL ------------------ */
export const ModalOverLay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background: white;
  width: 30%;
  padding: 25px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  animation: pop 0.25s ease;

  @media (max-width: ${breakpoints.tablet}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    padding: 20px;
  }

  .amount {
    input {
      width: 100%;
      border: 1px solid grey;
      padding: 1rem;
      border-radius: 8px;
      outline: none;
    }
  }

  .payment {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      gap: 10px;
    }
  }

  .option-box {
    padding: 15px 12px;
    border-radius: 10px;
    margin-top: 15px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
    transition: 0.2s ease;
  }

  .option-box.selected {
    border: 2px solid #1e90ff;
    background: #e8f2ff;
  }

  .option-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .choose-btn {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: none;
    margin-top: 20px;
    font-size: 16px;

    background: #ddd;
    color: #777;
    cursor: not-allowed;
    transition: 0.2s ease;
  }

  .choose-btn.active {
    background: #1e90ff;
    color: white;
    cursor: pointer;
  }

  .go-back {
    margin-top: 12px;
    color: #1e90ff;
    cursor: pointer;
    text-align: center;
  }
`;
