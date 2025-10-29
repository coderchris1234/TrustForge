import styled from "styled-components";

export const MeetingContainer = styled.div`
  width: 95%;
  /* background-color: red; */
  background-color: red;
  margin: 0 auto;
  margin-top: 2rem;

  .meetingHeading {
    .meetingStats {
      background-color: #c1c1c1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      border-radius: 50px;
      gap: 3rem;
      padding: 0;

      div {
        background-color: white;
        padding: 0 7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        border-radius: 10px;

        &:focus {
          background-color: pink;
          color: blue;
        }
      }
    }
  }
`;
