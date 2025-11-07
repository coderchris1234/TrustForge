import styled from "styled-components";

export const InvestorMeeting_container = styled.div`
  width: 100%;
  margin-top: 1rem;

  .Invetor_wrapper {
    width: 100%;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .tittle {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;

      .tittle_left {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .pending,
        .first {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          padding: 0.4rem 0.8rem;
          border: 1px solid gray;
          gap: 0.5rem;
        }
      }

      .tittle_right {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .join_meetings,
        .schedule_meetings {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.4rem;
          padding: 0.6rem 1rem;
          font-size: 0.9rem;
          cursor: pointer;
          border: 1px solid gray;
        }

        .join_meetings {
          background-color: #0046ff;
          color: white;
          gap: 0.5rem;
        }

        .schedule_meetings {
          background-color: transparent;
        }
      }
    }

    .name_container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;

      .profile_text {
        background-color: #eceff4;
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .solution {
        color: blue;
      }
    }

    .calender {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .date_container {
        .date {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }
      }

      .video_call_continer {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .video_call,
        .time_container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;

          .time {
            display: flex;
            flex-wrap: wrap;
            gap: 0.7rem;
          }
        }
      }
    }

    .discuss_text {
      border-radius: 8px;
      background: #eceff4;
      padding: 0.3rem;
      width: 100%;
      max-width: 600px;
      height: 40px;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    .Invetor_wrapper {
      padding: 0.8rem;

      .tittle {
        flex-direction: column;
        align-items: flex-start;

        .tittle_left,
        .tittle_right {
          flex-direction: row;
          flex-wrap: wrap;
        }

        .pending,
        .first,
        .join_meetings,
        .schedule_meetings {
          font-size: 0.85rem;
          padding: 0.4rem 0.6rem;
          gap: 0.5rem;
        }
      }

      .name_container {
        gap: 0.5rem;

        .profile_text {
          height: 2.5rem;
          width: 2.5rem;
        }
      }

      .discuss_text {
        font-size: 0.9rem;
        display: flex;
        height: 40px;
        align-items: center;
        /* justify-content: center; */
        margin: 0;
      }
    }
  }

  @media (max-width: 480px) {
    .Invetor_wrapper {
      padding: 0.6rem;

      .tittle_left,
      .tittle_right {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.6rem;
      }

      .pending,
      .first,
      .join_meetings,
      .schedule_meetings {
        width: 100%;
        font-size: 0.8rem;
      }

      .name_container {
        flex-direction: column;
        gap: 0.4rem;
      }

      .discuss_text {
        font-size: 0.85rem;
        width: 100%;
      }

      .video_call_continer {
        flex-direction: column;
        gap: 0.6rem;
      }

      .time_container .time {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
`;
