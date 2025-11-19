import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
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
        align-items: center;

        .pending {
          background-color: yellow;
          border: 1px solid grey;
          padding: 5px;
          border-radius: 8px;
          border: none;
          color: #101010;
          /* display: flex; */
          /* align-items: center; */
        }
        .Reschedule {
          background-color: var(--secondary_color_100);
          padding: 0.3rem;
          border-radius: 8px;
          color: #9e9999;
        }

        .Decl {
          background-color: var(--error_red_color_400);
          padding: 0.3rem;
          border-radius: 8px;
          color: #ffff;
        }

        .confirm,
        .first {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          padding: 0.4rem 0.8rem;
        }

        .conf {
          background-color: #4eca7c;
          color: #035003;
          padding: 0.3rem;
          border-radius: 8px;
        }

        .first {
          border: 1px solid gray;
        }
      }

      .tittle_right {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .decline_button {
          color: #ffff;
          background-color: #ff0000d8;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          gap: 0.2rem;
        }

        .awaiting {
          background-color: transparent;
          border: 1px solid grey;
          display: flex;
          align-items: center;
          border-radius: 8px;
          padding: 0.5rem;
          gap: 0.5rem;
        }

        .cancel {
          background-color: transparent;
          border: 1px solid grey;
          display: flex;
          align-items: center;
          border-radius: 8px;
          padding: 0.5rem;
          gap: 0.5rem;
        }

        .join_meetings,
        .schedule_meetings {
          background-color: #0046ff;
          color: white;
          border-radius: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          cursor: pointer;
          padding: 0.6rem 1rem;
        }

        .schedule_meetings {
          background-color: orange;
          color: #ffff;
          border: 1px solid gray;
          border: none;
        }
      }
    }

    .name_container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;

      .profile_text {
        background-color: #eceff4;
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

        .confirm,
        .first,
        .join_meetings,
        .schedule_meetings {
          font-size: 0.85rem;
          padding: 0.4rem 0.6rem;
        }
      }

      .name_container {
        gap: 0.5rem;

        .profile_text {
          height: 1.8rem;
          width: 1.8rem;
        }
      }

      .discuss_text {
        font-size: 0.9rem;
        height: 40px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
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

      .confirm,
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
  flex-direction: column;
  gap: 15px;
  animation: pop 0.25s ease;

  .workin {
    display: flex;
    justify-content: space-between;
  }

  .InputContainer {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
    }
  }

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #ddd;
  }

  button {
    background-color: blue;
    border: none;
    color: #ffff;
    padding: 1rem;
    border-radius: 8px;
  }
`;
