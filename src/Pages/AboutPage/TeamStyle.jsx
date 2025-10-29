import styled from "styled-components";

export const TeamContainer = styled.div`
  width: 100%;
  height: max-content;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  align-items: center;

  .Team_wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;

    .Team_header_text {
      width: 100%;
      height: max-content;
      gap: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        margin: 0px;
        font-size: 40px;
        font-weight: 600;
        color: var(--main_black);
      }
      p {
        font-size: 18px;
        font-weight: 400;
        color: var(--main_black);
        padding-bottom: 10px;
      }
    }

    .Team_images {
      width: 100%;
      height: 406px;
      display: flex;
      justify-content: space-between;

      .Team_card {
        width: 32%;
        height: 100%;
        background-color: var(--main_white);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        gap: 12px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--neutral_black_color);
          margin: 0px;
        }

        span {
          font-size: 15px;
          font-weight: 500;
          color: var(--primary_color_400);
        }

        p {
          font-size: 18px;
          font-weight: 500;
          color: var(--neutral_black_color);
          line-height: 125%;
          text-align: center;
        }

        .Team_Card_profile {
          width: 162px;
          height: 162px;
          /* background-color: orange; */
          border-radius: 50%;
          border: 4px solid var(--primary_color_500);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
