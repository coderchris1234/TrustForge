import styled from "styled-components";

export const Meeting_container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .meeting {
    width: 100%;

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
  }

  .upcoming_coming {
    background-color: #c1c1c1;
    display: flex;
    padding: 0.3rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 320px;

    .upcoming,
    .coming {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      font-size: 14px;
      height: 30px;
    }

    .upcoming {
      background-color: white;
      gap: 0.4rem;

      span {
        background-color: red;
        border-radius: 1rem;
        height: 1.2rem;
        width: 1.22rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 12px;
      }
    }
  }

  @media (max-width: 768px) {
    .meeting {
      h1 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }
    }

    .upcoming_coming {
      max-width: 100%;
      flex-direction: row;
      font-size: 13px;

      .upcoming,
      .coming {
        font-size: 13px;
        height: 30px;
      }

      .upcoming span {
        font-size: 11px;
        height: 1.1rem;
        width: 1.1rem;
      }
    }
  }

  @media (max-width: 480px) {
    .meeting {
      h1 {
        font-size: 16px;
      }

      p {
        font-size: 13px;
      }
    }

    .upcoming_coming {
      flex-direction: column;
      align-items: stretch;
      gap: 0.4rem;

      .upcoming,
      .coming {
        width: 100%;
        font-size: 12px;
        padding: 0.4rem 0.6rem;
      }

      .upcoming span {
        font-size: 10px;
        height: 1rem;
        width: 1rem;
      }
    }
  }
`;
