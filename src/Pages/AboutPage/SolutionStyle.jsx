import styled from "styled-components";

export const SolutionContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  padding: 4rem 0;

  .Solution_wrapper {
    width: 90%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    .Solution_section {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        object-fit: cover;
      }
    }

    .Section_section1 {
      width: 45%;
      display: flex;
      align-items: center;
      justify-content: center;

      .Solution_text_holder {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;

        h3 {
          font-size: 36px;
          font-weight: 600;
          color: var(--netural_black_color);
          margin: 0;
          line-height: 120%;
        }

        p,
        span {
          font-size: 16px;
          font-weight: 400;
          line-height: 167%;
          color: var(--netural_black_color);
        }
      }
    }
  }

  /* ✅ Tablet view (1024px and below) */
  @media (max-width: 1024px) {
    .Solution_wrapper {
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;
      gap: 40px;

      .Solution_section {
        width: 100%;
        order: 1;

        img {
          max-width: 90%;
          height: auto;
        }
      }

      .Section_section1 {
        width: 100%;
        order: 2;

        .Solution_text_holder {
          align-items: center;

          h3 {
            font-size: 30px;
          }

          p,
          span {
            font-size: 15px;
            max-width: 650px;
          }
        }
      }
    }
  }

  /* ✅ Mobile view (≤768px) */
  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .Solution_wrapper {
      flex-direction: column-reverse;
      align-items: flex-start;
      text-align: left;
      gap: 25px;

      .Solution_section {
        width: 100%;

        img {
          width: 100%;
          height: auto;
          border-radius: 15px;
        }
      }

      .Section_section1 {
        width: 100%;

        .Solution_text_holder {
          gap: 15px;
          h3 {
            font-size: 26px;
          }

          p,
          span {
            font-size: 14px;
            line-height: 160%;
          }
        }
      }
    }
  }

  /* ✅ Small mobile (≤480px) */
  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .Solution_wrapper {
      gap: 20px;

      .Section_section1 .Solution_text_holder {
        h3 {
          font-size: 22px;
        }

        p,
        span {
          font-size: 13px;
        }
      }

      .Solution_section img {
        border-radius: 12px;
      }
    }
  }
`;
