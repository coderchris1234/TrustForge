import styled from "styled-components";
import Success from "../assets/Success.png";

export const StoriesContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 0;
  background-image: url(${Success});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;

  .Story_wrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .Story_header {
      text-align: center;
      h3 {
        font-size: 36px;
        margin: 0;
      }
      span {
        color: var(--primary_color_500);
      }
      p {
        max-width: 700px;
        margin: 0 auto;
        font-size: 20px;
      }
    }

    .Story_card_holder {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;

      .Story_card {
        width: 32%;
        background-color: var(--main_white);
        border: 1px solid var(--neutral_gray_color_700);
        border-radius: 12px;
        overflow: hidden;
        transition: 0.3s;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        .Story_image {
          width: 100%;
          height: 220px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: center;
          }
        }

        .Story_contents {
          padding: 1rem;

          .Story_cont1 {
            margin-bottom: 1rem;
            .Story_icon {
              color: var(--primary_color_500);
              font-size: 24px;
            }
            p {
              font-size: 18px;
              line-height: 130%;
            }
          }

          .Story_cont2 {
            h4 {
              margin: 0;
              font-size: 20px;
            }
            span {
              font-size: 16px;
            }
            p {
              font-size: 14px;
              font-style: italic;
            }
          }
        }
      }
    }
  }

  /* ----------- TABLET 1024px ----------- */
  @media (max-width: 1024px) {
    .Story_wrapper .Story_card_holder .Story_card {
      width: 45%;
    }
  }

  /* ----------- MOBILE LARGE 768px ----------- */
  @media (max-width: 768px) {
    .Story_wrapper .Story_header h3 {
      font-size: 28px;
    }
    .Story_wrapper .Story_header p {
      font-size: 16px;
    }

    .Story_wrapper .Story_card_holder {
      flex-direction: column;
      align-items: center;
    }

    .Story_wrapper .Story_card_holder .Story_card {
      width: 90%;
    }
  }

  /* ----------- MOBILE SMALL 480px ----------- */
  @media (max-width: 480px) {
    .Story_wrapper .Story_header h3 {
      font-size: 24px;
    }
    .Story_wrapper .Story_header p {
      font-size: 14px;
    }

    .Story_wrapper .Story_card_holder .Story_card {
      width: 100%;
    }

    .Story_wrapper .Story_card_holder .Story_card .Story_contents p {
      font-size: 14px;
    }
  }
`;
