import styled from "styled-components";

export const ValuesContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  .Value_wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .Value_header_text {
      width: 100%;
      height: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin-top: 10px;

      h1 {
        margin: 0px;
        font-size: 36px;
        font-weight: 600;
        color: var(--netural_black_color);
      }

      p {
        font-size: 22px;
        font-weight: 400;
        color: var(--netural_black_color);
      }
    }

    .Value_card {
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .Value_card_item {
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding-top: 20px;

        h3 {
          font-size: 24px;
          font-weight: 600;
          color: var(--netural_black_color);
          margin: 0px;
        }

        p {
          font-size: 16px;
          text-align: center;
        }

        .Value_image_holder {
          width: 58px;
          height: 58px;
          border-radius: 50px;
          background-color: var(--primary_color_200);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary_color_500);
          font-size: 28px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    height: auto;
    padding: 3rem 0;

    .Value_wrapper {
      .Value_header_text {
        h1 {
          font-size: 32px;
        }

        p {
          font-size: 18px;
          text-align: center;
        }
      }

      .Value_card {
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        height: auto;

        .Value_card_item {
          width: 45%;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1.5rem;

    .Value_wrapper {
      .Value_header_text {
        align-items: flex-start;
        text-align: left;
        h1 {
          font-size: 28px;
        }

        p {
          font-size: 16px;
        }
      }

      .Value_card {
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
        height: auto;

        .Value_card_item {
          width: 100%;
          align-items: flex-start;
          text-align: left;
          padding-top: 10px;

          .Value_image_holder {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }

          h3 {
            font-size: 20px;
          }

          p {
            font-size: 14px;
            text-align: left;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .Value_wrapper {
      .Value_header_text {
        align-items: center;
      }
      .Value_header_text h1 {
        font-size: 24px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .Value_card .Value_card_item {
        gap: 10px;
        align-items: center;

        h3 {
          font-size: 18px;
        }

        p {
          font-size: 13px;
          text-align: center;
        }
      }
    }
  }
`;
