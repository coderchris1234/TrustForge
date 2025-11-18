import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FundContainer = styled.div`
  width: 100%;
  min-height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #336bff, #002da3, #002da3, #336bff);
  margin-bottom: 2rem;
  padding: 2rem 1rem;
  animation: ${fadeUp} 1s ease forwards;

  .Fund_page_wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .Fund_num {
      max-width: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      animation: ${fadeUp} 1.2s ease forwards;

      h1 {
        font-size: 45px;
        font-weight: 700;
        color: var(--main_white);
        margin: 0;
        letter-spacing: 1px;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }

      p {
        font-size: 18px;
        font-weight: 400;
        color: var(--main_white);
        margin: 0.5rem 0 0;
        line-height: 1.4;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;

    .Fund_page_wrapper {
      gap: 1.5rem;
      flex-direction: column;

      .Fund_num h1 {
        font-size: 30px;
      }

      .Fund_num p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .Fund_page_wrapper {
      flex-direction: column;
      gap: 1.5rem;

      .Fund_num {
        width: 100%;

        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
