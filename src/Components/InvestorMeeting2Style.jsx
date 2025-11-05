import styled from "styled-components"
export const InvestorMeeting_container = styled.div`
 height: 100%;
  width: 100%;
  margin-top: 1rem;

  .Invetor_wrapper {
    height: 14rem;
    width: 100%;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 0.8rem;

    .tittle {
      height: 20%;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .tittle_left {
        height: 100%;
        width: 65%;
        display: flex;
        gap: 2rem;

        .pending {
          height: 60%;
          width: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          border: 1px solid gray;
          gap: 0.2rem;
        }
        .first {
          height: 60%;
          width: 6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          border: 1px solid gray;
        }
      }
      .tittle_right {
        height: 100%;
        width: 35%;
        display: flex;
        gap: 2rem;

        .join_meetings {
          height: 100%;
          width: 11rem;
          border-radius: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          cursor: pointer;
          border: 1px solid gray;
        }
        .schedule_meetings {
          height: 100%;
          width: 10rem;
          border-radius: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 1px solid gray;
        }
      }
    }
    .name_container {
      height: 33%;
      width: 100%;
      display: flex;
      gap: 0.7rem;

      .profile_text {
        background-color: #ECEFF4;
        height: 2rem;
        width: 2rem;
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
      height: 30%;
      width: 100%;

      .date_container {
        height: 50%;
        width: 100%;
        .date {
          height: 100%;
          width: 100%;
          gap: 0.7rem;
          display: flex;
        }
      }

      .video_call_continer {
        height: 50%;
        width: 100%;
        display: flex;

        .video_call {
          height: 100%;
          width: 40%;
          gap: 0.7rem;
          display: flex;
        }
        .time_container {
          height: 100%;
          width: 40%;

          .time {
            height: 100%;
            width: 40%;
            gap: 0.7rem;
            display: flex;
          }
        }
      }
    }

    .discuss_text{
        height: 2rem;
        width: 75%;
        border-radius: 8px;
        background: #ECEFF4;
        padding: 0.3rem;
    }
  }
`