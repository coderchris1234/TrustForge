/* eslint-disable react-refresh/only-export-components */
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
        align-items: center;
        gap: 1rem;

        .await {
          border: 1px solid grey;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: #f6b131ff;
          padding: 5px;
          border: none;
        }
        .cencl {
          border: 1px solid grey;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: #cbcbcbff;
          padding: 5px;
          border: none;
        }
        .Reschedule {
          border: 1px solid grey;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: #f5e5c6ff;
          padding: 5px;
          border: none;
        }
        .Decl {
          border: 1px solid grey;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: #e80606ff;
          padding: 5px;
          border: none;
          color: white;
        }

        .conf {
          border: 1px solid grey;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: #1fe91f;
          padding: 0.5rem;
        }

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

        .accept_meetings,
        .schedule_meetings {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.4rem;
          padding: 0.6rem 1rem;
          font-size: 0.9rem;
          cursor: pointer;
          /* border: 1px solid gray; */
        }
        .join_meetings {
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

        .accept_meetings {
          background-color: transparent;
          color: black;
          gap: 0.5rem;
          cursor: pointer;
        }

        .schedule_meetings {
          background-color: transparent;
          display: flex;
          gap: 0.5rem;
          cursor: pointer;
        }
        .decline_button {
          border: 1px solid gray;
          background-color: transparent;
          display: flex;
          align-items: center;
          border-radius: 8px;
          padding: 0.5rem;
          gap: 5px;
          cursor: pointer;
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

const breakpoints = {
  mobile: "480px",
  mobileLarge: "768px",
  tablet: "1024px",
};

export const ModalOverLay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 20px; /* keep some space on small screens */
  box-sizing: border-box;

  /* allow vertical scrolling on tiny screens and keep modal away from edges */
  @media (max-width: ${breakpoints.mobile}) {
    align-items: flex-start;
    padding-top: 28px;
    overflow-y: auto;
  }
`;

export const ModalBox = styled.div`
  background: white;
  width: 30%;
  max-width: 900px;
  min-width: 320px;
  padding: 25px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: pop 0.25s ease;
  box-sizing: border-box;
  max-height: calc(100vh - 48px);
  overflow-y: auto;

  .workin {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .InputContainer {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
      min-width: 0; /* helps children shrink in flex */
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
    box-sizing: border-box;
    width: 100%;
  }

  button {
    background-color: blue;
    border: none;
    color: #ffff;
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;
  }

  /* ---------------- Tablet ---------------- */
  @media (max-width: ${breakpoints.tablet}) {
    width: 60%;
    padding: 20px;
    border-radius: 10px;
    max-height: calc(100vh - 40px);

    h3 {
      font-size: 18px;
    }

    .InputContainer {
      gap: 1rem;
    }

    input {
      padding: 9px;
      font-size: 14px;
    }

    button {
      padding: 0.9rem;
      font-size: 14px;
    }
  }

  /* --------- Large phones / small tablets --------- */
  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 85%;
    padding: 18px;
    border-radius: 10px;

    .workin {
      gap: 8px;
    }

    .InputContainer {
      gap: 0.8rem;
      /* stack inputs vertically on smaller devices for comfortable tap targets */
      flex-direction: column;
    }

    input {
      padding: 10px;
      font-size: 14px;
    }

    button {
      width: 100%; /* full-width button for easier tapping */
      padding: 0.9rem;
    }
  }

  /* --------- Small phones --------- */
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    min-width: 0;
    max-height: calc(100vh - 28px);

    .workin {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    .InputContainer {
      flex-direction: column;
      gap: 10px;
    }

    input {
      padding: 10px;
      font-size: 14px;
    }

    button {
      width: 100%;
      padding: 0.9rem;
      font-size: 15px;
    }
  }

  /* small pop animation fallback if needed */
  @keyframes pop {
    from {
      transform: scale(0.98);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;