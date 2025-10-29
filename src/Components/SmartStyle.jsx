import styled from "styled-components";
import WHYBg from "../assets/WHY.png";

export const SmartContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${WHYBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* object-fit: cover; */
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
          font-size: 16px;
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
          height: 100%;
          border-radius: 15px;
          background-color: var(--main_white);
          display: flex;
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
              font-size: 16px;
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
`;
