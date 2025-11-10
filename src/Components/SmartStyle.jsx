import styled from "styled-components";
import WHYBg from "../assets/WHY.png";

export const SmartContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${WHYBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .Smart_wrapper {
    width: 80%;
    height: 60%;
    display: flex;
    gap: 20px;

    .Smart_left {
      width: 40%;
      height: 100%;

      .Smart_left_content {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;

        h3 {
          font-size: 36px;
          font-weight: 600;
          line-height: 125%;
          color: var(--netural_black_color);
        }

        span {
          color: var(--primary_color_500);
        }

        p {
          font-size: 20px;
          font-weight: 400;
          line-height: 150%;
          color: var(--netural_black_color);
          text-align: center;
        }
      }
    }

    .Smart_right {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;

      .Smart_right_content {
        width: 100%;
        height: 50%;
        display: flex;
        gap: 15px;

        .Smart_card {
          width: 50%;
          height: 90%;
          border-radius: 15px;
          background-color: var(--main_white);
          display: flex;
          padding: 0.5rem;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--neutral_gray_color_700);
          transition: all 350ms ease-in-out;

          &:hover {
            border: 1px solid var(--primary_color_500);
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }

          .Smart_card_cont {
            width: 100%;
            height: max-content;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 10px;

            h3 {
              font-size: 22px;
              font-weight: 500;
              color: var(--netural_black_color);
              margin: 0px;
            }

            span {
              font-size: 20px;
              font-weight: 400;
              color: var(--netural_black_color);
            }

            .Smart_img {
              width: 48px;
              height: 47px;
              background-color: var(--primary_color_100);
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 26px;
              color: var(--primary_color_500);
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    height: auto;
    padding: 4rem 0;

    .Smart_wrapper {
      width: 90%;
      height: auto;
      flex-direction: column;
      align-items: center;
      gap: 40px;

      .Smart_left {
        width: 100%;

        .Smart_left_content {
          align-items: center;
          text-align: center;

          h3 {
            font-size: 30px;
          }

          p {
            font-size: 15px;
            max-width: 600px;
          }
        }
      }

      .Smart_right {
        width: 100%;
        .Smart_right_content {
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;

          .Smart_card {
            width: 45%;
            height: auto;
            padding: 1.5rem 0;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 3rem 0;

    .Smart_wrapper {
      width: 90%;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .Smart_left {
        width: 100%;
        .Smart_left_content {
          h3 {
            font-size: 26px;
          }

          p {
            font-size: 14px;
          }
        }
      }

      .Smart_right {
        width: 100%;
        .Smart_right_content {
          flex-direction: column;
          align-items: center;
          gap: 20px;

          .Smart_card {
            width: 90%;
            height: auto;

            .Smart_card_cont {
              align-items: center;
              text-align: center;

              h3 {
                font-size: 18px;
              }

              span {
                font-size: 14px;
              }

              .Smart_img {
                width: 42px;
                height: 42px;
                font-size: 22px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .Smart_wrapper {
      width: 90%;
      gap: 25px;

      .Smart_left {
        .Smart_left_content {
          h3 {
            font-size: 22px;
            line-height: 130%;
          }

          p {
            font-size: 13px;
            line-height: 140%;
          }
        }
      }

      .Smart_right {
        .Smart_right_content {
          .Smart_card {
            width: 100%;
            .Smart_card_cont {
              padding: 15px;

              h3 {
                font-size: 16px;
              }

              span {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
`;
