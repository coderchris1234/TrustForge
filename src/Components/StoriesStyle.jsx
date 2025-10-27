import styled from "styled-components";

export const StoriesContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;

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

    .Story_card_holder {
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: space-between;

      .Story_card {
        width: 32%;
        height: 100%;
        border-radius: 12px;
        border: 1px solid var(--neutral_gray_color_700);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        .Story_image {
          width: 100%;
          height: 55%;
          border-top-right-radius: 12px;
          border-top-left-radius: 12px;

          img {
            width: 100%;
            height: 100%;
            border-top-right-radius: 12px;
            border-top-left-radius: 12px;
            object-fit: cover;
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
            height: 50%;
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
            height: 35%;
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
`;
