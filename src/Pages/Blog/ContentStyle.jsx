import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  padding: 50px;

  .Startup_content {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* background-color: red; */
    gap: 20px;

    .Startup_card {
      width: 32%;
      height: max-content;
      /* min-height: 500px; */
      min-height: 70%;
      background-color: var(--main_white);
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      /* background-color: blue; */
      margin-top: 20px;

      .Startup_Card_image {
        width: 100%;
        min-height: 50%;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        background: #000;

        img {
          width: 100%;
          height: 100%;
          border-top-right-radius: 15px;
          border-top-left-radius: 15px;
        }
      }

      .Startup_card_contents {
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;

        .Startup_card_text_holder {
          width: 100%;
          height: 55%;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 5px 0px 0px 10px;
          /* background-color: green; */
          margin-top: 20px;

          .Read_me_blog_startup {
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

        .Startup_card_footer {
          width: 100%;
          height: max-content;
          display: flex;
          flex-direction: column;
          /* background-color: orange; */

          .Profile_startup {
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

          .Profile_startup1 {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            padding: 5px 0px 0px 10px;
            gap: 10px;

            .Profile_icon_startup_holder {
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
`;
