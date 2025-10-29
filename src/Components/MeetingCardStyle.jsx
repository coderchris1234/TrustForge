import styled from "styled-components";

export const MeetingContainer = styled.div`
  .MeetingWrapper {
    background-color: #ffff;
    .meetingHeader {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      align-items: center;
    }

    .meetingDetails {
      .contact {
        /* background-color: red; */
        display: flex;
        gap: 0.5rem;
        align-items: center;

        .initials {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: lightgray;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          word-spacing: 1rem;
        }
        .details {
          margin: 0;
          padding: 0.5rem;
          /* background-color: orange; */

          span {
            display: block;
          }
          .link {
            color: blue;
          }
        }
      }
    }
  }

  .busTitle {
    display: flex;
    background-color: pink;
    align-items: center;
    gap: 1rem;

    .conf {
      background-color: #7af3a7;
      padding: 0.2rem;
      color: #16a34a;
      border-radius: 8px;
      font-size: 14px;
    }
  }

  .btn {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    .button {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      gap: 0.3rem;
      padding: 0.5rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    .meeting {
      background-color: #0046ff;
      color: #ffff;
    }
  }
`;
