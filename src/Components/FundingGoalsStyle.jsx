import styled from "styled-components";

export const Funding_container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  height: auto;
  /* background-color: green; */

  .funding_wrapper {
    width: 22rem;
    padding: 0.8rem;
    border-radius: 0.7rem;
    border: 1px solid #1b1b1b4d;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 8rem;

    .total_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      margin-bottom: 0.5rem;
      /* background-color: green; */

      .total {
        width: 60%;
      }

      .sign {
        width: 11%;
        background-color: #cee3ff;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0046ff;
        padding: 0.3rem;
      }
    }

    .amount {
      display: flex;
      align-items: flex-end;
      font-weight: 600;
      font-size: 1rem;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    .funding_wrapper {
      width: 100%;
      padding: 0.6rem;

      .total_wrapper {
        flex-direction: row;
        gap: 1rem;

        .total {
          width: auto;
        }

        .sign {
          width: auto;
          font-size: 0.9rem;
        }
      }

      .amount {
        font-size: 0.95rem;
      }
    }
  }

  @media (max-width: 480px) {
    .funding_wrapper {
      padding: 0.5rem;

      .total_wrapper {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.4rem;

        .sign {
          font-size: 0.85rem;
          padding: 0.2rem 0.4rem;
        }
      }

      .amount {
        font-size: 0.9rem;
      }
    }
  }
`;
