import styled from "styled-components";

export const MeetingContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 2rem;

  .meetingHeading {
    .meetingStats {
      background-color: #c1c1c1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      border-radius: 50px;
      gap: 3rem;
      padding: 0.3rem 0.5rem;

      div {
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        border-radius: 50px;
        transition: all 0.3s ease;

        &.active {
          background-color: #ffff;
          color: #1b1b1b;
          font-weight: 600;
        }
        p {
          margin: 0.5rem 0;
        }
      }
    }
  }

  @media (max-width: 900px) {
    .meetingHeading .meetingStats {
      gap: 1.25rem;
      padding: 0.28rem 0.4rem;
    }
  }

  @media (max-width: 480px) {
    width: 96%;
    margin-top: 0.8rem;
    margin-bottom: 1.2rem;

    .meetingHeading {
      .meetingStats {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
        justify-content: space-between;
        gap: 8px;
        padding: 6px; 
        border-radius: 999px;

        div {
          flex: 0 1 auto;
          min-width: 42%; 
          max-width: 48%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8px 10px;
          border-radius: 999px;

          p {
            margin: 0;
            font-size: 14px;
            line-height: 1;
            text-align: center;
          }

          &.active {
            background-color: #ffff;
            color: #1b1b1b;
            font-weight: 600;
          }
        }
      }
    }
  }

  @media (max-width: 340px) {
    .meetingHeading .meetingStats {
      gap: 6px;

      div {
        min-width: 100%;
        max-width: 100%;
      }
    }
  }
`;
