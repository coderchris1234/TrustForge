import styled from "styled-components";
import Success from "../assets/Success.png";

export const StoriesContainer = styled.div`
  width: 100%;
  height: 110vh;
  background: url(${Success});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  .Story_wrapper {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .Story_header {
      width: 100%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      h3 {
        font-size: 36px;
        font-weight: 600;
        margin: 0px;
        text-align: center;
      }

      span {
        color: var(--primary_color_500);
      }

      p {
        font-size: 16px;
        font-weight: 400;
        color: var(--netural_black_color);
        text-align: center;
        max-width: 700px;
      }
    }

    .Story_card_holder {
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;

      .Story_card {
        width: 32%;
        height: 100%;
        border-radius: 12px;
        border: 1px solid var(--neutral_gray_color_700);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--main_white);
        transition: all 0.3s ease;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        .Story_image {
          width: 100%;
          height: 55%;
          border-top-right-radius: 12px;
          border-top-left-radius: 12px;
          background-position: cover;

          img {
            width: 100%;
            height: 100%;
            border-top-right-radius: 12px;
            border-top-left-radius: 12px;
          }
        }

        .Story_contents {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;

          .Story_cont1 {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            .Story_icon {
              font-size: 25px;
              color: var(--primary_color_500);
              padding-top: 20px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              color: var(--main_black);
              line-height: 125%;
            }
          }

          .Story_cont2 {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 8px;

            h4 {
              font-size: 18px;
              color: var(--main_black);
              font-weight: 500;
              margin: 0px;
            }

            .span {
              font-size: 16px;
              color: var(--main_black);
              font-weight: 400;
            }

            p {
              font-size: 14px;
              color: var(--main_black);
              font-weight: 400;
              font-style: italic;
            }

            .Linediv {
              width: 100%;
              height: 3px;
              display: flex;
              justify-content: center;
              margin-bottom: 1rem;

              .Line {
                width: 90%;
                height: 1px;
                background-color: var(--netural_black_color);
              }
            }
          }
        }
      }
    }
  }

  /* ✅ Responsive Breakpoints */

  @media (max-width: 1024px) {
    height: auto;
    padding: 4rem 0;

    .Story_wrapper {
      height: auto;
      .Story_card_holder {
        justify-content: center;
        gap: 25px;

        .Story_card {
          width: 45%;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 3rem 0;

    .Story_wrapper {
      width: 95%;
      .Story_header {
        h3 {
          font-size: 28px;
        }

        p {
          font-size: 15px;
          max-width: 500px;
        }
      }

      .Story_card_holder {
        flex-direction: column;
        align-items: center;
        gap: 25px;

        .Story_card {
          width: 90%;
          height: auto;

          .Story_contents {
            padding: 15px;

            .Story_cont1 p {
              font-size: 15px;
            }

            .Story_cont2 {
              h4 {
                font-size: 17px;
              }

              .span {
                font-size: 15px;
              }

              p {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .Story_wrapper {
      width: 90%;
      gap: 25px;

      .Story_header {
        h3 {
          font-size: 24px;
        }

        p {
          font-size: 14px;
          line-height: 140%;
        }
      }

      .Story_card_holder {
        .Story_card {
          width: 100%;
          .Story_contents {
            padding: 12px;

            .Story_cont1 p {
              font-size: 14px;
            }

            .Story_cont2 {
              h4 {
                font-size: 16px;
              }

              .span {
                font-size: 14px;
              }

              p {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
`;
