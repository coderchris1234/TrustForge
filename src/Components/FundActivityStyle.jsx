import styled from "styled-components";

export const FundActivity_container = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .sec_wrapper {
    width: 100%;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .tittle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      .right_sec {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .activeicon {
        border: 1px solid gray;
        border-radius: 0.7rem;
        height: 2rem;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        background-color: #deffea;
        color: green;
        font-size: 12px;
        font-weight: 600;
      }

      .view_details {
        height: 2.2rem;
        width: 7rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid gray;
        font-size: 0.9rem;
      }
    }

    .investment {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      margin-top: 1rem;
      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    .sec_wrapper {
      padding: 0.8rem;

      .tittle {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;

        .right_sec {
          flex-direction: row;
          gap: 0.5rem;
        }

        .activeicon,
        .view_details {
          width: auto;
          font-size: 11px;
          padding: 0.4rem 0.6rem;
        }
      }

      .investment {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 480px) {
    .sec_wrapper {
      padding: 0.6rem;

      .tittle {
        gap: 0.6rem;

        .activeicon,
        .view_details {
          font-size: 10px;
          padding: 0.3rem 0.5rem;
        }
      }

      .investment {
        gap: 0.6rem;
      }
    }
  }
`;
