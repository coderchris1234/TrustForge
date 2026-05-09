import styled from "styled-components";

export const MeetingContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
  font-family: "Poppins", sans-serif;

  .tabs {
    display: flex;
    gap: 4px;
    margin-bottom: 2rem;
    background: #f0f2f8;
    padding: 4px;
    border-radius: 12px;
    width: fit-content;
  }

  .tab {
    position: relative;
    height: 38px;
    padding: 0 20px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    color: #6b7280;
    border-radius: 8px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;

    &:hover {
      background: rgba(0,70,255,0.06);
      color: #0046ff;
    }

    &.active {
      background: #0046ff;
      color: #ffffff;
      font-weight: 600;
    }

    span {
      background: rgba(255,255,255,0.25);
      color: inherit;
      padding: 1px 7px;
      font-size: 0.72rem;
      border-radius: 100px;
      font-weight: 700;
    }

    &.active span {
      background: rgba(255,255,255,0.25);
    }

    &:not(.active) span {
      background: #e8edff;
      color: #0046ff;
    }
  }

  .meetingHeading {
    .meetingStats {
      background: #f0f2f8;
      display: flex;
      align-items: center;
      border-radius: 100px;
      padding: 4px;
      width: fit-content;
      gap: 2px;

      div {
        height: 36px;
        padding: 0 20px;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 0.85rem;
        font-weight: 500;
        color: #6b7280;
        transition: all 0.2s ease;
        background: transparent;

        p { margin: 0; }

        &.active {
          background: #0046ff;
          color: #ffffff;
          font-weight: 600;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;

    .tabs {
      width: 100%;
      overflow-x: auto;
    }

    .meetingHeading .meetingStats {
      width: 100%;
      border-radius: 12px;
      flex-wrap: wrap;
      padding: 6px;

      div {
        flex: 1;
        min-width: 45%;
        border-radius: 8px;
      }
    }
  }
`;
