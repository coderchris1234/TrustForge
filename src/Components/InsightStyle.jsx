import styled from "styled-components";

export const InsightContainer = styled.div`
  width: 100%;
  height: 107vh;
  background: linear-gradient(to right, #f5b301, #8ab7f4, #8ab7f4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  .Insight_wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .Insight_texts {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 40px;
      gap: 20px;

      h3 {
        font-size: 36px;
        font-weight: 600;
        color: var(--netural_black_color);
        margin-bottom: 0px;
      }

      span {
        color: var(--primary_color_500);
      }

      p {
        font-size: 16px;
        font-weight: 400;
        color: var(--netural_black_color);
      }
    }

    .Insight_card_holder {
      width: 100%;
      height: 65%;
      display: flex;
      justify-content: space-between;
      /* background-color: red; */

      .Insight_card {
        width: 32%;
        height: max-content;
        min-height: 70%;
        background-color: var(--main_white);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .Insight_Card_image {
          width: 100%;
          height: 50%;
          border-top-right-radius: 15px;
          border-top-left-radius: 15px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .Insight_card_contents {
          width: 100%;
          height: max-content;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;

          .Insight_card_text_holder {
            width: 100%;
            height: 55%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            /* background-color: green; */
            padding: 5px 0px 0px 10px;
            margin-top: 25px;

            .Read_me_blog {
              p {
                font-size: 14px;
                font-weight: 400;
                display: flex;
                flex-direction: column;

                .Read_More {
                  text-decoration: none;
                  font-size: 14px;
                  font-weight: 300;
                  color: var(--secondary_color_600);
                }
              }
            }

            span {
              width: 86px;
              height: 24px;
              background-color: var(--neutral_gray_color_700);
              border-radius: 10px;
              font-size: 12px;
              color: var(--netural_black_color);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              font-weight: 400;
              color: var(--netural_black_color);
            }

            h3 {
              font-size: 18px;
              font-weight: 500;
              color: var(--netural_black_color);
              line-height: 125%;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              color: var(--netural_black_color);
              line-height: 150%;
            }
          }

          .Insight_card_footer {
            width: 100%;
            height: max-content;
            display: flex;
            flex-direction: column;
            /* background-color: blue; */
            margin-top: 10px;

            .Profile_insight {
              width: 100%;
              height: 50%;
              display: flex;
              align-items: center;
              padding: 5px 0px 0px 10px;
              gap: 10px;

              span {
                font-size: 18px;
                color: var(--main_black);
                margin: 0px;
              }

              p {
                font-size: 14px;
                font-weight: 400;
                color: var(--main_black);
                margin: 0px;
              }
            }

            .Profile_insight1 {
              width: 100%;
              height: 50%;
              display: flex;
              align-items: center;
              padding: 5px 0px 0px 10px;
              gap: 10px;

              .Profile_icon_holder {
                width: 50%;
                height: 100%;
                display: flex;
                gap: 10px;
                align-items: center;
                padding-bottom: 1rem;

                span {
                  font-size: 18px;
                  margin: 0px;
                }

                p {
                  font-size: 14px;
                  font-weight: 400;
                  color: var(--main_black);
                  margin: 0px;
                }
              }
            }
          }
        }
      }
    }

    .Insight_btn {
      width: 163px;
      height: 44px;
      margin-top: 20px;
      border-radius: 8px;
      cursor: pointer;
      background-color: var(--primary_color_500);
      border: none;
      color: var(--main_white);
    }
  }
`;
