import styled from "styled-components";

export const ProblemContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  .Problem_wrapper {
    width: 90%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    .Problem_section {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .Problem_text_holder {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h3 {
          font-size: 36px;
          font-weight: 600;
          color: var(--netural_black_color);
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

    .Problem_section1 {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        /* max-height: 500px; */
        border-radius: 20px;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 1024px) {
    .Problem_wrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 40px;

      .Problem_section {
        width: 100%;

        .Problem_text_holder {
          width: 100%;
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

      .Problem_section1 {
        width: 100%;
        margin-top: 0;

        img {
          max-width: 90%;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .Problem_wrapper {
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      gap: 25px;

      .Problem_section {
        width: 100%;

        .Problem_text_holder {
          width: 100%;
          padding-top: 0;
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

      .Problem_section1 {
        width: 100%;
        display: flex;
        justify-content: flex-start;

        img {
          width: 100%;
          height: auto;
          border-radius: 15px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .Problem_wrapper {
      gap: 20px;

      .Problem_section {
        width: 100%;

        .Problem_text_holder {
          h3 {
            font-size: 22px;
          }

          p,
          span {
            font-size: 13px;
          }
        }
      }
      .Problem_section1 {
        width: 100%;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
        }
      }
      .Problem_section1 img {
        border-radius: 12px;
        width: 100%;
      }
    }
  }
`;
