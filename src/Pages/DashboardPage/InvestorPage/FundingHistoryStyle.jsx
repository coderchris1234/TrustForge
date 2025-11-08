import styled from "styled-components";

export const FundingHistory_contianer = styled.div`
  width: 100%;
  padding: 1rem;

  h1 {
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  .read_unread {
    width: 100%;
    background-color: #c1c1c1;
    padding: 0.4rem;
    display: flex;
    justify-content: space-between;
    border-radius: 2rem;
    margin-top: 1.4rem;
    gap: 0.5rem;

    .active,
    .pending,
    .completed {
      flex: 1;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      font-weight: 500;
      font-size: 0.95rem;
      padding: 0.5rem;
      cursor: pointer;
    }

    .pending {
      background-color: transparent;
    }

    .completed {
      background-color: transparent;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }

    .read_unread {
      flex-direction: column;
      align-items: stretch;
      height: auto;

      .active,
      .pending,
      .completed {
        width: 100%;
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 16px;
    }

    p {
      font-size: 13px;
    }

    .read_unread {
      gap: 0.4rem;

      .active,
      .pending,
      .completed {
        font-size: 0.85rem;
        padding: 0.4rem;
      }
    }
  }
`;
