import styled from "styled-components";

export const MeetingContainer = styled.div`
  .MeetingWrapper {
    background-color: #ffff;
    margin-top: 1rem;
    border-radius: 10px;
    /* background-color: orange; */
    padding: 0.5rem;

    .meetingHeader {
      width: 100%;
      display: flex;
      justify-content: space-between;
      /* padding: 1rem; */
      align-items: center;
    }

    .meetingDetails {
      /* background-color: blue; */
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .contact {
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
          display: flex;
          flex-direction: column;
          justify-content: center;

          span {
            display: block;
          }
          .link {
            color: blue;
          }
        }
      }

      .meetingTime {
        /* background-color: grey; */
        display: flex;
        width: 60%;
        justify-content: space-between;
        align-items: center;

        .meetingDate {
          /* background-color: red; */
          align-items: center;

          div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            /* background-color: red; */
          }
        }
      }

      .discussion {
        border-radius: 8px;
        background: #eceff4;
        width: 60%;
        padding: 0.5rem;
      }
    }
  }

  .busTitle {
    display: flex;
    /* background-color: pink; */
    /* background-color: pink; */
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
