import styled from "styled-components";

export const MeetingContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 2rem;

  .meetingHeading {
    /* background-color: red; */
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
`;
